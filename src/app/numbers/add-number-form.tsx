"use client";

import { addNumber, AddNumberParams } from "@/actions/numbers";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const ADD_NUMBER_FORM_SCHEMA = z.object({
  number: z.string().min(1, "Number is required"),
});

export function AddNumberForm() {
  const form = useForm<z.infer<typeof ADD_NUMBER_FORM_SCHEMA>>({
    resolver: zodResolver(ADD_NUMBER_FORM_SCHEMA),
    defaultValues: {
      number: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ADD_NUMBER_FORM_SCHEMA>) {
    await addNumber({
      number: parseInt(values.number),
    } as AddNumberParams);
    form.reset();
    toast.success("Number was added");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Add Number</CardTitle>
            <CardDescription>Full out the form to add a number</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={-32767}
                      max={32767}
                      placeholder="eg 10, 32767, -32767"
                      className="max-w-xs"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button disabled={form.formState.isSubmitting} type="submit">
              {form.formState.isSubmitting ? (
                <Loader className="animate-spin" />
              ) : null}
              Add Number
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
