"use client";

import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfk from "remark-gfm";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Send, Loader2, CircleUserRound, BotMessageSquare } from "lucide-react";

import { useChat } from "@ai-sdk/react";
import { Message } from "ai";

const Chat = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    reload,
    error,
  } = useChat({
    api: "/api/student-chat",
  });

  return (
    <>
      <section className="p-4 pt-3">
        <Card className="">
          <CardContent className="pt-4">
            <ScrollArea className="h-[400px] md:p-6 p-2 bg-primary_Clr rounded-lg ">
              {messages?.length == 0 && (
                <div className="flex justify-center items-center w-full mt-32 gap-3 text-slate-500">
                  No message yet
                </div>
              )}
              {messages?.map((message: Message, index: number) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`flex gap-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-slate-800 text-white p-1 w-[40%] text-left text-lg"
                        : "bg-gray-200 p-2 text-black"
                    } p-4`}
                  >
                    <div>
                      {message.role === "user" ? (
                        <CircleUserRound className="size-8" />
                      ) : (
                        <BotMessageSquare className="size-8" />
                      )}
                    </div>
                    <ReactMarkdown
                      remarkPlugins={[remarkGfk]}
                      className="flex-1"
                      components={{
                        code({ children, ...props }) {
                          return (props as { inline: boolean }).inline ? (
                            <code
                              {...props}
                              className="bg-gray-200 px-1  rounded"
                            >
                              {children}
                            </code>
                          ) : (
                            <pre
                              {...(props as React.HTMLAttributes<HTMLPreElement>)}
                              className="bg-gray-200 px-2 rounded"
                            >
                              <code>{children}</code>
                            </pre>
                          );
                        },
                        ul: ({ children }) => (
                          <ul className="list-disc ml-4">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal ml-4">{children}</ol>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="w-full items-center flex  justify-center gap-3">
                  <Button size="icon">
                    <Loader2 className="animate-spin" />
                  </Button>
                </div>
              )}
              {error && (
                <div className="w-full items-center flex  justify-center gap-3">
                  <h1>An error occurred</h1>
                  <button className="underline" onClick={() => reload()}>
                    Retry
                  </button>
                </div>
              )}
              <div ref={scrollRef}></div>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form
              onSubmit={handleSubmit}
              className="flex items-center space-x-2 w-full"
            >
              <Input
                type="text"
                placeholder="Type your message here..."
                value={input}
                onChange={handleInputChange}
                className="flex-1"
              />
              <Button type="submit" className="size-9" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
              </Button>
            </form>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default Chat;
