// Dependencies импортлох
import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import { z } from "zod";

// Компонент импортлох
import { columns } from "@/app/components/shared/columns";
import { DataTable } from "@/app/components/shared/data-table";
import { UserNav } from "@/app/components/shared/user-navigation";
import { ThemeToggle } from "@/app/components/shared/theme-toggle";
import { taskSchema } from "@/app/data/schema";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <div className="flex-col flex-1 h-full p-8 space-y-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Тавтай морилно уу!
            </h2>
            <p className="text-muted-foreground">
              Tampermonkey, Greasemonkey, Violentmonkey-д зориулсан usercript
              цуглуулга!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
