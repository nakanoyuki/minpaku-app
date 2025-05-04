"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <main className="p-6">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>shadcn/ui 確認</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-4">
          <Tabs defaultValue="basic">
            <TabsList>
              <TabsTrigger value="basic">基本</TabsTrigger>
              <TabsTrigger value="extra">追加</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4 pt-4">
              <div className="flex items-center gap-2">
                <Checkbox id="check" />
                <Label htmlFor="check">Checkbox</Label>
              </div>

              <Input placeholder="Input" />
              <Textarea placeholder="Textarea" rows={2} />

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">オプション 1</SelectItem>
                  <SelectItem value="2">オプション 2</SelectItem>
                </SelectContent>
              </Select>

              <Button>Button</Button>
              <Badge>Badge</Badge>
            </TabsContent>

            <TabsContent value="extra" className="space-y-4 pt-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="mx-auto"
              />

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>名前</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>テスト</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
}
