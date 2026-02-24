import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Star, Zap, Target, Package } from "lucide-react";

interface Skill {
  name: string;
  source: string;
  link: string;
  function: string;
  usage: string;
  rating: number;
}

function RatingBadge({ rating }: { rating: number }) {
  const getColor = (r: number) => {
    if (r >= 9.5) return "bg-emerald-100 text-emerald-800";
    if (r >= 9) return "bg-green-100 text-green-800";
    if (r >= 8.5) return "bg-blue-100 text-blue-800";
    return "bg-amber-100 text-amber-800";
  };
  return (
    <Badge className={`${getColor(rating)} font-semibold`}>
      <Star className="w-3 h-3 mr-1 fill-current" />
      {rating}/10
    </Badge>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg">{skill.name}</CardTitle>
            <CardDescription className="text-xs mt-1">{skill.source}</CardDescription>
          </div>
          <RatingBadge rating={skill.rating} />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-3">
        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-1">Function</p>
          <p className="text-sm leading-relaxed">{skill.function}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-1">Usage</p>
          <p className="text-sm leading-relaxed">{skill.usage}</p>
        </div>
        <a href={skill.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center text-xs font-medium text-primary hover:underline">
          View Details <ExternalLink className="w-3 h-3 ml-1" />
        </a>
      </CardContent>
    </Card>
  );
}

const skillsData = [
  {
    id: "list1",
    title: "List 1: Core Skills",
    categories: [{
      name: "Productivity",
      skills: [{
        name: "Gog",
        source: "ClawHub",
        link: "https://clawhub.ai/skills?q=gog",
        function: "Google Workspace CLI",
        usage: "Automate Gmail, Calendar",
        rating: 10,
      }],
    }],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("list1");
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative w-full overflow-hidden py-20">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">OpenClaw Skills</h1>
          <p className="text-xl text-slate-600">Empower Vina</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData[0].categories[0].skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
