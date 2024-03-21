"use client";

import * as z from "zod";
import { Heading } from "@/components/Heading";
import {useForm} from "react-hook-form";
import { MessagesSquare } from "lucide-react";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OpenAI from "openai";
// import ChatCompletionRequestMessage  from "openai";

const ConversationPage =() =>{
  const router =useRouter();
  const [messages ,setMessages] = useState([])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      prompt:""
    }
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values:z.infer<typeof formSchema>)=>{
    try{
      const userMessage ={
        role:"user",
        content:values.prompt
      }
      const chatCompletion = await OpenAI.Chat.ChatCompletionMessage({
        model: "gpt-3.5-turbo",
        messages: [userMessage],
    });
    }
    }catch(err:any){
      console.log(err);
    }finally{
      router.refresh();
    }
  }

    return (
        <div>
          <Heading
            title="conversation"
            description="Our Most Advanced Conversation feature"
            icon={MessagesSquare}
            iconColor="text-violet-500"
            bgColor="bgviolet-500/10"
          />
          <div className="px-4 lg:px-8">
            <div>
              <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}
                    className="rounded-lg border w-full p-4 px-3 md:px-3 focus-within:shadow-sm grid grid-cols-12 gap-2"
                  >
                      <FormField 
                        name="prompt"
                        render={({field}) =>(
                          <FormItem className="col-span-12 lg:col-span-10">
                            <FormControl className="m-0 p-0 ">
                              <Input 
                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent "
                                disabled={isLoading}
                                placeholder="How does Ai Works?" 
                                {...field}/>
                            </FormControl>
                          </FormItem>
                        )}
                        />
                        <Button className="col-span-12 lg:col-span-2 w-full " disabled={isLoading}>
                          Generate
                        </Button>
                  </form>
              </Form>
            </div>
            <div className="space-y-4 mt-4">
              Message Box

            </div>
            
          </div>
        </div>
    )
}

export default ConversationPage;