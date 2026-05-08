import { createContext, useContext, useEffect, type ChangeEvent, type FormEventHandler, type HTMLAttributes, type LabelHTMLAttributes, type ReactNode } from 'react';
import type { FormControlState, FormFieldRules } from '@/integrations/forms/FormProvider';

export type FormFieldRenderProps = {
  field: {
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    value: string
  }
}

type FormProps = {
  children: ReactNode
  className?: string
  onSubmit?: FormEventHandler<HTMLFormElement>
}

type FormFieldProps = {
  control: FormControlState
  name: string
  render: (props: FormFieldRenderProps) => ReactNode
  rules?: FormFieldRules
}

type FieldContextValue = {
  control: FormControlState
  name: string
}

const FieldContext = createContext<FieldContextValue | null>(null);

export function Form({ children, onSubmit, className }: FormProps) {
  return <form onSubmit={onSubmit} className={className}>{children}</form>;
}

export function FormField({ control, name, render, rules }: FormFieldProps) {
  useEffect(() => {
    control.register(name, rules);
  }, [control, name, rules]);

  return (
    <FieldContext.Provider value={{ control, name }}>
      {render({
        field: {
          name,
          onChange: (event) => control.update(name, event.target.value),
          value: control.values[name] ?? '',
        },
      })}
    </FieldContext.Provider>
  );
}

export function FormItem({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function FormLabel({ children, className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={className} {...props}>{children}</label>;
}

export function FormControl({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function FormMessage({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  const field = useContext(FieldContext);
  const message = field?.control.errors[field.name];

  if (!message) return null;

  return <span className={className} {...props}>{message}</span>;
}
