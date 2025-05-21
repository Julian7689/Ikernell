'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function CardLogin() {
  return (
    <Card className="relative w-[500px] h-[300px] overflow-hidden">
      <CardHeader>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 text-purple-500">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
           
            <div className="flex flex-col space-y-1.5 text-purple-500">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center ">
        <Button className=" w-[400px] h-[40px] mt-8 bg-purple-700 hover:bg-purple-900 text-black-500 font-semibold">Login</Button>
      </CardFooter>

      <BorderBeam
        duration={7}
        size={600}
        reverse
        className="from-transparent via-purple-500 to-transparent"
      />
    </Card>
  );
}