import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
 
export default function Content() {
  return (
    <Card className="flex col-span-3 p-4 mt-10 text-lg round ed-xl">
      <Typography variant="h4" color="deep-purple">
      Employees Data
      </Typography>
      <form className="max-w-screen-lg mt-8 mb-2">
        <div className="flex flex-col gap-6 mb-4">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Job" />
          <Input type="password" size="lg" label="Employed" />
        </div>
        <Button className="mt-6" color="deep-purple" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
}