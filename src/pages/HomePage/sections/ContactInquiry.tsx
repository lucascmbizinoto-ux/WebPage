"use client";

import { Mail, Phone, MapPin, Loader } from "lucide-react";
import type { FormFieldRenderProps } from "@/components/ui/form";
import { FormProvider, useWvcForm } from "@/integrations/forms/FormProvider";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/common/Link";

function ContactFormInner() {
  const {
    control,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    submitError,
    successMessage,
  } = useWvcForm();

  if (isSubmitted && !submitError) {
    return (
      <div className="p-8 bg-secondary border border-border rounded-md">
        <p className="text-foreground font-default font-bold text-lg text-center">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="name"
          rules={{ required: "Designation is required" }}
          render={({ field }: FormFieldRenderProps) => (
            <FormItem>
              <FormLabel className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
                Designation / Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          rules={{
            required: "Comms channel is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid comms channel format",
            },
          }}
          render={({ field }: FormFieldRenderProps) => (
            <FormItem>
              <FormLabel className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
                Comms Channel (Email)
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="subject"
        rules={{ required: "Operation subject is required" }}
        render={({ field }: FormFieldRenderProps) => (
          <FormItem>
            <FormLabel className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              Operation Subject
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Enter subject"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-destructive" />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="message"
        rules={{ required: "Intelligence report is required", minLength: { value: 10, message: "Report too short" } }}
        render={({ field }: FormFieldRenderProps) => (
          <FormItem>
            <FormLabel className="text-muted-foreground uppercase tracking-widest text-xs font-bold">
              Intelligence Report (Message)
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter your message"
                className="min-h-[150px] resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-destructive" />
          </FormItem>
        )}
      />

      {submitError && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
          <p className="text-destructive text-sm font-bold">{submitError}</p>
        </div>
      )}

      <Button
        type="submit"
        variant="destructive"
        size="lg"
        disabled={isSubmitting}
        className="w-full uppercase font-default font-extrabold tracking-widest text-sm h-14"
      >
        {isSubmitting ? (
          <>
            <Loader className="mr-2 h-5 w-5 animate-spin" />
            TRANSMITTING...
          </>
        ) : (
          "INITIATE CONTACT"
        )}
      </Button>
    </Form>
  );
}

export default function ContactInquiry() {
  return (
    <section id="contactinquiry" className="bg-background">
      <div className="bg-background text-foreground py-24 border-t border-border/20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <h2 className="font-default font-extrabold text-3xl md:text-4xl uppercase tracking-wider mb-4">
                  Operational Inquiry
                </h2>
                <div className="h-1 w-20 bg-destructive mb-6"></div>
                <p className="text-muted-foreground max-w-xl">
                  Submit your operational requirements or intelligence inquiries through our secure channel. A designated operative will respond within standard protocol timeframes.
                </p>
              </div>

              <FormProvider
                formId="operational_inquiry_form_home"
                sectionName="ContactInquiry"
                defaultValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                submitText="INITIATE CONTACT"
                successMessage="TRANSMISSION SUCCESSFUL. OPERATIVE WILL CONTACT YOU SHORTLY."
              >
                <ContactFormInner />
              </FormProvider>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
              
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-secondary p-3 rounded-md text-destructive group-hover:bg-destructive group-hover:text-primary-foreground transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-default font-extrabold uppercase tracking-widest text-muted-foreground text-sm">
                    Command Center
                  </h3>
                </div>
                <p className="font-default font-bold text-2xl md:text-3xl text-foreground pl-16">
                  Lucas Moreira
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-secondary p-3 rounded-md text-destructive group-hover:bg-destructive group-hover:text-primary-foreground transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-default font-extrabold uppercase tracking-widest text-muted-foreground text-sm">
                    Secure Comms
                  </h3>
                </div>
                <Link 
                  to="mailto:lucascmbizinoto@gmail.com"
                  className="font-default font-bold text-xl md:text-2xl text-foreground pl-16 hover:text-destructive transition-colors duration-300 block"
                >
                  lucascmbizinoto@gmail.com
                </Link>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-secondary p-3 rounded-md text-destructive group-hover:bg-destructive group-hover:text-primary-foreground transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-default font-extrabold uppercase tracking-widest text-muted-foreground text-sm">
                    Direct Line
                  </h3>
                </div>
                <Link 
                  to="tel:+13056103835"
                  className="font-default font-bold text-2xl md:text-3xl text-foreground pl-16 hover:text-destructive transition-colors duration-300 block"
                >
                  +1 305 610-3835
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
