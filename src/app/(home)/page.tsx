import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div>
        <Button variant="secondary">Get Started</Button>
      </div>
      <div>
        <Input placeholder="Enter your email" />
      </div>
      <div>
        <Progress value={70} className="w-56" />
      </div>
      <div>
        <Checkbox id="terms" />
        <label htmlFor="terms" className="ml-2 text-sm">
          I agree to the terms and conditions
        </label>
      </div>
      <div>
        <Textarea placeholder="Your message" className="mt-2" />
      </div>
    </div>
  );
}
