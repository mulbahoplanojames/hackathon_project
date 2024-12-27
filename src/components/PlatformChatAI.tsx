"use client";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfk from "remark-gfm";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

import { X, Send, Loader2, ArrowDownCircle, MessageCircle } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { Message } from "ai";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(false);
  const chatIconRef = useRef<HTMLButtonElement>(null);
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
    api: "/api/chat",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowChatIcon(true);
      } else {
        setShowChatIcon(false);
        setIsChatOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <section>
        <AnimatePresence>
          {showChatIcon && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-4 right-4 shadow-lg"
            >
              <Button
                ref={chatIconRef}
                onClick={toggleChat}
                size="icon"
                className="rounded-full size-12 p-2 shadow-md"
              >
                {isChatOpen ? (
                  <ArrowDownCircle className="size-12" />
                ) : (
                  <MessageCircle className="size-12" />
                )}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-20 right-12 z-50 w-[95%] md:w-[450px] shadow-xl"
            >
              <Card>
                <CardHeader className="flex justify-between flex-row  space-y-0 pb-3">
                  <CardTitle className="text-lg font-bold">
                    Chat with Preformance Hub AI
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-2 py-0"
                    onClick={toggleChat}
                  >
                    <X className="size-4" />
                    <span className="sr-only">Close Chat</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] pr-4">
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
                          className={`inline-block  rounded-lg ${
                            message.role === "user"
                              ? "bg-blue-300 text-white p-1"
                              : "bg-gray-200"
                          } p-4`}
                        >
                          <ReactMarkdown
                            remarkPlugins={[remarkGfk]}
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
                                <ol className="list-decimal ml-4">
                                  {children}
                                </ol>
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
                    <Button
                      type="submit"
                      className="size-9"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <Send className="size-4" />
                      )}
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Chat;
