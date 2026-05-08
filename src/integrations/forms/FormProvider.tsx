import { createContext, useCallback, useContext, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';

export type FormFieldRules = {
  minLength?: {
    message: string
    value: number
  }
  pattern?: {
    message: string
    value: RegExp
  }
  required?: string
}

export type FormControlState = {
  errors: Record<string, string>
  register: (name: string, rules?: FormFieldRules) => void
  update: (name: string, value: string) => void
  values: Record<string, string>
}

type FormContextValue = {
  control: FormControlState
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  isSubmitted: boolean
  isSubmitting: boolean
  submitError: string | null
  successMessage: string
}

type FormProviderProps = {
  children: ReactNode
  defaultValues?: Record<string, string>
  formId?: string
  sectionName?: string
  submitText?: string
  successMessage?: string
}

const FormContext = createContext<FormContextValue | null>(null);

function validateValue(value: string, rules?: FormFieldRules) {
  if (!rules) return '';
  if (rules.required && value.trim().length === 0) return rules.required;
  if (rules.minLength && value.trim().length < rules.minLength.value) return rules.minLength.message;
  if (rules.pattern && !rules.pattern.value.test(value)) return rules.pattern.message;
  return '';
}

export function FormProvider({
  children,
  defaultValues = {},
  successMessage = 'Transmission received.',
}: FormProviderProps) {
  const [values, setValues] = useState<Record<string, string>>(defaultValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const rulesRef = useRef<Record<string, FormFieldRules | undefined>>({});

  const register = useCallback((name: string, rules?: FormFieldRules) => {
    rulesRef.current[name] = rules;
  }, []);

  const update = useCallback((name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }, []);

  const control = useMemo<FormControlState>(() => ({
    errors,
    register,
    update,
    values,
  }), [errors, register, update, values]);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);

    const nextErrors = Object.entries(rulesRef.current).reduce<Record<string, string>>((acc, [name, rules]) => {
      const message = validateValue(values[name] ?? '', rules);
      if (message) acc[name] = message;
      return acc;
    }, {});

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  }, [values]);

  return (
    <FormContext.Provider value={{ control, handleSubmit, isSubmitting, isSubmitted, submitError, successMessage }}>
      {children}
    </FormContext.Provider>
  );
}

export function useWvcForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useWvcForm must be used inside FormProvider');
  }
  return context;
}
