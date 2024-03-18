"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessagesSquare ,ImageIcon , VideoIcon ,MusicIcon , CodeIcon, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
const tools =[
  {
    label:"Convesation",
    icon:MessagesSquare,
    href: "/consversation",
    color:"text-violet-500",
    bgColor:"bg-violet-500/10"
},
{
    label:"Image Generator",
    icon:ImageIcon,
    href: "/image",
    color:"text-orange-500",
    bgColor:"text-orange-500/10"
},
{
    label:"video Generator",
    icon:VideoIcon,
    href: "/video",
    color:"text-pink-500",
    bgColor:"text-pink-500/10",
},
{
    label:"Music Generator",
    icon:MusicIcon,
    href: "/music",
    color:"text-emerald-500",
    bgColor:"text-emerald-500/10",
},
{
    label:"Code Generator",
    icon:CodeIcon,
    href: "/code",
    color:"text-cyan-300",
    bgColor:"text-cyan-300/10"
},
]
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          Explore the Power of AI
        </h2>
        <p className="text-muted-foreground text:sm md:text-lg text-center">
            Chat with the Smartest AI - Experience the power of AI With Just One Click 
        </p>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) =>(
              <Card
              onClick={() =>{
                  router.push(tool.href)
              }}
                key={tool.href}
                className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md" , tool.bgColor)}>
                      <tool.icon className={cn("w-6 h-6" ,tool.color)}/>
                  </div>
                  <div className="font-semibold">
                      {tool.label}
                  </div>
                </div>
                <ArrowRight/>
              </Card>
          ))}
        </div>
          
      </div>
 
    </div>
  );
}

export default DashboardPage;