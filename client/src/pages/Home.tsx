import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Star, Zap, Target, Package, FileText } from "lucide-react";

// (这里省略了原来 Manus 写的 Skills 数据定义部分，保留原样即可，为了清晰我这里简写了)
// ... 保持原有的 interface Skill 和 skillsData 等定义不变 ...
// ... 保持原有的 RatingBadge 和 SkillCard 组件不变 ...

export default function Home() {
  const [activeTab, setActiveTab] = useState("list1");
  const [markdownContent, setMarkdownContent] = useState<string>("Loading guide...");

  // 新增：自动抓取你刚才上传的 md 文件
  useEffect(() => {
    // 假设你把文件放在了 public 目录下。如果你放在了 src/assets，这里的路径可能要调整。
    fetch('/skills_guide.md')
      .then(response => response.text())
      .then(text => setMarkdownContent(text))
      .catch(error => setMarkdownContent("Failed to load guide."));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* ... 保持原有的头部 Hero 区域不变 ... */}

      <section className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="list1" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>List 1</span>
            </TabsTrigger>
            <TabsTrigger value="list2" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>List 2</span>
            </TabsTrigger>
            {/* 新增的 Markdown 标签页按钮 */}
            <TabsTrigger value="guide" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Skills Guide</span>
            </TabsTrigger>
          </TabsList>

          {/* ... 保持原有 List 1 和 List 2 的内容渲染不变 ... */}

          {/* 新增：Markdown 渲染区域 */}
          <TabsContent value="guide" className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Skills Guide</h2>
            <Card className="p-6">
               <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700 font-sans">
                 {markdownContent}
               </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* ... 保持原有的页脚不变 ... */}
    </div>
  );
}
