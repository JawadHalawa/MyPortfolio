// "use client";

// import { motion } from "framer-motion";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import emailjs from '@emailjs/browser';
// import { useToast } from "@/components/ui/use-toast";
// import { Linkedin,Send,MessageCircleMore } from "lucide-react";

// const formSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
// });

// export function Contact() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   const { toast } = useToast();

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       const response = await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         {
//           from_name: values.name,
//           from_email: values.email,
//           message: values.message,
//         },
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       );

//       if (response.status === 200) {
//         toast({
//           title: "✅ Message Sent Successfully!",
//           description: "Thank you for reaching out! I'll review your message and get back to you as soon as possible. Have a great day! 😊",
//           variant: "default",
//           duration: 10000,
//         });
//         form.reset();
//       } else {
//         throw new Error("Failed to send email");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       toast({
//         variant: "destructive",
//         title: "❌ Message Not Sent",
//         description: "Sorry, there was a problem sending your message. Please try again or contact me through social media.",
//         duration: 10000,
//       });
//     }
//   };

//   return (
//     <section id="contact" className="py-20">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="max-w-2xl mx-auto"
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        
//         {/* Social Links */}
//         <div className="flex justify-center gap-4 mb-12">
//           <Button variant="outline" size="icon" asChild>
//             <a
//               href="https://www.linkedin.com/in/jawadhalawa"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-600"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>
//           </Button>
//           <Button variant="outline" size="icon" asChild>
//             <a
//               href="https://t.me/+963991882334"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-500"
//             >
//               <Send className="h-5 w-5" />
//             </a>
//           </Button>
//           <Button variant="outline" size="icon" asChild>
//             <a
//               href="https://wa.me/+963991882334"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-green-600"
//             >
//               <MessageCircleMore className="h-5 w-5" />
//             </a>
//           </Button>
//         </div>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Your name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="your.email@example.com" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="message"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Message</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Your message..."
//                       className="min-h-[150px]"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" className="w-full">Send Message</Button>
//           </form>
//         </Form>
//       </motion.div>
//     </section>
//   );
// }

//------2 parts------------------------------------------

// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { useState } from "react";

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Handle form submission here
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setFormData({ name: "", email: "", message: "" });
//       alert("Thank you for your message! I'll get back to you soon.");
//     }, 1000);
//   };

//   return (
//     <section id="contact" className="py-20">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Contact Information</CardTitle>
//                 <CardDescription>
//                   Feel free to reach out to me for any inquiries or opportunities.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <Mail className="h-5 w-5 text-primary" />
//                   <span>jawad@example.com</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Phone className="h-5 w-5 text-primary" />
//                   <span>+1234567890</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <MapPin className="h-5 w-5 text-primary" />
//                   <span>Your Location</span>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Send Me a Message</CardTitle>
//                 <CardDescription>
//                   I'd love to hear from you. Send me a message and I'll respond as soon as possible.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <Input
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                   <Input
//                     name="email"
//                     type="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                   <Textarea
//                     name="message"
//                     placeholder="Your Message"
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   />
//                   <Button type="submit" disabled={isSubmitting} className="w-full">
//                     {isSubmitting ? (
//                       "Sending..."
//                     ) : (
//                       <>
//                         Send Message <Send className="ml-2 h-4 w-4" />
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

//----------1part----------------------
// "use client";

// import { motion } from "framer-motion";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import emailjs from '@emailjs/browser';
// import { useToast } from "@/components/ui/use-toast";
// import { Linkedin, Send, MessageCircleMore, Mail, Phone, MapPin } from "lucide-react";

// const formSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
// });

// export function Contact() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   const { toast } = useToast();

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       const response = await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         {
//           from_name: values.name,
//           from_email: values.email,
//           message: values.message,
//         },
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       );

//       if (response.status === 200) {
//         toast({
//           title: "✅ Message Sent Successfully!",
//           description: "Thank you for reaching out! I'll review your message and get back to you as soon as possible. Have a great day! 😊",
//           variant: "default",
//           duration: 10000,
//         });
//         form.reset();
//       } else {
//         throw new Error("Failed to send email");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       toast({
//         variant: "destructive",
//         title: "❌ Message Not Sent",
//         description: "Sorry, there was a problem sending your message. Please try again or contact me through social media.",
//         duration: 10000,
//       });
//     }
//   };

//   return (
//     <section id="contact" className="py-20 relative">
//       {/* Background decoration */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
//       </div>
      
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="max-w-4xl mx-auto"
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        
//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <div className="bg-primary/10 p-4 rounded-full inline-flex items-center justify-center mb-4 mx-auto">
//               <Mail className="h-6 w-6 text-primary" />
//             </div>
//             <h3 className="font-semibold mb-2">Email</h3>
//             <p className="text-muted-foreground">jawad@example.com</p>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <div className="bg-primary/10 p-4 rounded-full inline-flex items-center justify-center mb-4 mx-auto">
//               <Phone className="h-6 w-6 text-primary" />
//             </div>
//             <h3 className="font-semibold mb-2">Phone</h3>
//             <p className="text-muted-foreground">+963 991 882 334</p>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <div className="bg-primary/10 p-4 rounded-full inline-flex items-center justify-center mb-4 mx-auto">
//               <MapPin className="h-6 w-6 text-primary" />
//             </div>
//             <h3 className="font-semibold mb-2">Location</h3>
//             <p className="text-muted-foreground">Your Location</p>
//           </motion.div>
//         </div>
        
//         {/* Social Links */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//           className="flex justify-center gap-4 mb-12"
//         >
//           <Button variant="outline" size="icon" asChild>
//             <a
//               href="https://www.linkedin.com/in/jawadhalawa"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-600 hover:bg-blue-50 transition-colors"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>
//           </Button>
//           <Button variant="outline" size="icon" asChild>
//             <a
//               href="https://t.me/+963991882334"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-500 hover:bg-blue-50 transition-colors"
//             >
//               <Send className="h-5 w-5" />
//             </a>
//           </Button>
//           <Button variant="outline" size="icon" asChild>
//             <a
//               href="https://wa.me/+963991882334"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-green-600 hover:bg-green-50 transition-colors"
//             >
//               <MessageCircleMore className="h-5 w-5" />
//             </a>
//           </Button>
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Your name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input placeholder="your.email@example.com" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Message</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         placeholder="Your message..."
//                         className="min-h-[150px]"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
//                 {form.formState.isSubmitting ? "Sending..." : "Send Message"}
//               </Button>
//             </form>
//           </Form>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast";
import { Linkedin, Send, MessageCircleMore, Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (response.status === 200) {
        toast({
          title: "✅ Message Sent Successfully!",
          description: "Thank you for reaching out! I'll review your message and get back to you as soon as possible. Have a great day! 😊",
          variant: "default",
          duration: 10000,
        });
        form.reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "❌ Message Not Sent",
        description: "Sorry, there was a problem sending your message. Please try again or contact me through social media.",
        duration: 10000,
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out to me for any inquiries or opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>engjawadhalawa@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+963991882334</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Al-Quneitra,Syria</span>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/jawadhalawa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://t.me/+963991882334"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500"
                    >
                      <Send className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://wa.me/+963991882334"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                    >
                      <MessageCircleMore className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Your Email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Your Message"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                      {form.formState.isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}