"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { navItems } from "@/lib/data";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const year = new Date().getFullYear();

const formSchema = z.object({
  email: z.string().min(2).max(50),
  message: z.string().min(2).max(500),
});

export default function Footer() {
  const [sending, setSending] = React.useState(false);

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSending(true);

    await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "appication/json",
      },
      body: JSON.stringify(values),
    })
      .then(async (response) => {
        console.log(await response.json());
        if (response.status === 200) {
          toast({
            variant: "default",
            title: "Successfull",
            description: "Feedback sent successfully",
          });
          form.reset();
        } else {
          toast({
            variant: "destructive",
            title: "UnSuccessfull",
            description: "Feedback not sent",
          });
        }
        setSending(false);
      })
      .catch((err) => {
        console.log(err);
        toast({
          variant: "destructive",
          title: "UnSuccessfull",
          description: "Feedback not sent",
        });
        setSending(false);
      });
  }

  return (
    <>
      <div className="dark:bg-[#131313] bg-[#f2f2f2] border-t-2 w-full h-auto py-10 flex flex-col items-center">
        <Label className="font-normal text-4xl">
          <Link href={"/"}>FoodieSpot</Link>
        </Label>

        <div className="flex flex-col md:flex-row py-8 text-lg w-full max-w-7xl justify-evenly gap-10 md:gap-0">
          <div className="basis-1/3 text-center">
            <span className="hidden md:block font-semibold">
              Connect With Us
            </span>
            <div className="flex items-center md:flex-col flex-row gap-3 mt-4 justify-center">
              <FaGithub className="size-8" />
              <BsTwitterX className="size-8" />
              <FaInstagram className="size-8" />
            </div>
          </div>

          <div className="basis-1/5 font-semibold">
            <span className="hidden md:block">Explore</span>
            <ul className="font-normal opacity-40 flex flex-row md:flex-col md:gap-2 h-full justify-evenly md:justify-center">
              {navItems.map((item, index) => (
                <>
                  <li key={item.id}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                </>
              ))}
            </ul>
          </div>

          <div className="basis-1/3 font-semibold md:p-0 px-6">
            <span className="hidden md:block">Feedback</span>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }: any) => (
                    <FormItem className="flex flex-row items-end gap-2">
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <Button type="submit" disabled={sending}>
                        {sending ? "Sending" : "submit"}
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>

        <Separator className="my-4 w-[80%]" />
        <Label className="opacity-70 flex flex-col md:flex-row text-center gap-1 mt-2">
          <span>©FoodieSpot {year}</span>
          <span className="hidden md:block"> | </span>
          <span>Made with ❤️ by Nitte students</span>
        </Label>
      </div>
    </>
  );
}
