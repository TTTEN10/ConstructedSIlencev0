import React, { useMemo, useState } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/Footer";
import FadeInView from "@/components/FadeInView";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/UI/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/UI/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/UI/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import { Badge } from "@/components/UI/badge";
import { Button } from "@/components/UI/button";
import { Calendar } from "@/components/UI/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/UI/card";
import { Checkbox } from "@/components/UI/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/UI/collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/UI/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/UI/context-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/UI/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/UI/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/UI/dropdown";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/UI/hover-card";
import { Input } from "@/components/UI/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/UI/input-otp";
import { Label } from "@/components/UI/label";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/UI/menubar";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/UI/navigation-menu";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/UI/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/UI/popover";
import { Progress } from "@/components/UI/progress";
import { RadioGroup, RadioGroupItem } from "@/components/UI/radio-group";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/UI/resizable";
import { ScrollArea } from "@/components/UI/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/UI/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/UI/sheet";
import { Skeleton } from "@/components/UI/skeleton";
import { Slider } from "@/components/UI/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";

import { toast } from "@/components/UI/use-toast";

function Section({ title, children }) {
  return (
    <section className="px-6 md:px-12 py-10 md:py-14 border-t border-white/5">
      <FadeInView>
        <h2 className="font-playfair text-2xl md:text-3xl tracking-tight text-foreground">{title}</h2>
      </FadeInView>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function UIShowcase() {
  const [checked, setChecked] = useState(true);
  const [progress, setProgress] = useState(35);
  const [radioValue, setRadioValue] = useState("a");
  const [sliderValue, setSliderValue] = useState([40]);
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

  const commandItems = useMemo(() => ["Silence", "Form", "Identity"], []);

  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-0">
        <section className="pt-32 pb-12 md:pt-44 md:pb-16 px-6 md:px-12">
          <FadeInView>
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-muted-foreground">UI</span>
            <h1 className="font-playfair text-5xl md:text-7xl text-foreground mt-4 tracking-tight leading-none">
              Component showcase
            </h1>
            <p className="font-inter text-sm text-muted-foreground mt-6 max-w-xl leading-relaxed">
              A functional surface for every primitive shipped in <code className="text-secondary-foreground">src/components/UI</code>.
            </p>
          </FadeInView>
        </section>

        <Section title="Buttons, badges, toast">
          <div className="flex flex-wrap gap-3 items-center">
            <Button onClick={() => toast({ title: "Constructed Silence", description: "Toast is wired globally." })}>
              Trigger toast
            </Button>
            <Button variant="secondary" onClick={() => setProgress((p) => (p >= 100 ? 10 : p + 15))}>
              Increment progress
            </Button>
            <Badge>SS26</Badge>
            <Badge variant="secondary">Atelier</Badge>
          </div>
          <div className="mt-6">
            <Progress value={progress} />
          </div>
        </Section>

        <Section title="Cards, avatar, skeleton">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Identity</CardTitle>
                <CardDescription>Presence without volume.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/9919?s=64&v=4" alt="Avatar" />
                  <AvatarFallback>CS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-secondary-foreground">Press / Archive</p>
                  <p className="text-xs text-muted-foreground">contact@constructed-silence.local</p>
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <Button variant="ghost">Dismiss</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Loading state</CardTitle>
                <CardDescription>Skeleton primitive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section title="Form primitives">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="name@atelier.com" />
              </div>

              <div className="flex items-center gap-3">
                <Checkbox checked={checked} onCheckedChange={(v) => setChecked(Boolean(v))} id="terms" />
                <Label htmlFor="terms">Accept terms</Label>
              </div>

              <div className="space-y-2">
                <Label>Size</Label>
                <RadioGroup value={radioValue} onValueChange={setRadioValue} className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="a" id="size-a" />
                    <Label htmlFor="size-a">S</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="b" id="size-b" />
                    <Label htmlFor="size-b">M</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Intensity</Label>
                <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
              </div>

              <div className="space-y-2">
                <Label>OTP</Label>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Calendar</Label>
                <div className="border border-white/10 inline-block">
                  <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Select</Label>
                <Select defaultValue="black">
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Pick tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="graphite">Graphite</SelectItem>
                    <SelectItem value="bone">Bone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Overlays: dialog, sheet, drawer, dropdown, hover, context menu">
          <div className="flex flex-wrap gap-3 items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog</DialogTitle>
                  <DialogDescription>Overlay primitives are wired.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button onClick={() => toast({ title: "Saved", description: "This is a demo action." })}>Action</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary">Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sheet</SheetTitle>
                </SheetHeader>
                <div className="mt-6 text-sm text-muted-foreground">A side panel overlay.</div>
              </SheetContent>
            </Sheet>

            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="secondary">Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Drawer</DrawerTitle>
                  <DrawerDescription>Mobile-friendly panel.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="ghost">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">Dropdown</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => toast({ title: "Archive", description: "Menu item clicked." })}>
                  Archive
                </DropdownMenuItem>
                <DropdownMenuItem>Press</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost">Hover me</Button>
              </HoverCardTrigger>
              <HoverCardContent className="text-sm">
                A quiet tooltip-like surface.
              </HoverCardContent>
            </HoverCard>

            <ContextMenu>
              <ContextMenuTrigger asChild>
                <Button variant="ghost">Right click</Button>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem onClick={() => toast({ title: "Copied", description: "Context action executed." })}>
                  Copy
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>

          <div className="mt-8">
            <Alert>
              <AlertTitle>Alert</AlertTitle>
              <AlertDescription>Basic callout component is available.</AlertDescription>
            </Alert>
          </div>

          <div className="mt-6">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Alert dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm</AlertDialogTitle>
                  <AlertDialogDescription>This is a demo confirmation.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => toast({ title: "Confirmed", description: "Action accepted." })}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </Section>

        <Section title="Navigation & structure: menubar, navigation menu, pagination">
          <div className="flex flex-col gap-6">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New</MenubarItem>
                  <MenubarItem>Open</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm">Silence</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm">Form</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </Section>

        <Section title="Accordion, collapsible, popover, command">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Accordion type="single" collapsible className="border border-white/10 px-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Constructed Silence?</AccordionTrigger>
                <AccordionContent>Form built through restraint.</AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="space-y-4">
              <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="border border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-foreground">Collapsible</span>
                  <CollapsibleTrigger asChild>
                    <Button size="sm" variant="ghost">{collapsibleOpen ? "Hide" : "Show"}</Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="mt-4 text-sm text-muted-foreground">
                  Hidden content revealed.
                </CollapsibleContent>
              </Collapsible>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="text-sm">
                  A compact floating surface.
                </PopoverContent>
              </Popover>

              <Command className="border border-white/10">
                <CommandInput placeholder="Type…" />
                <CommandList>
                  <CommandEmpty>No results.</CommandEmpty>
                  <CommandGroup heading="Keywords">
                    {commandItems.map((t) => (
                      <CommandItem key={t} onSelect={() => toast({ title: t })}>
                        {t}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </div>
        </Section>

        <Section title="Resizable, scroll-area, table, tabs">
          <div className="grid grid-cols-1 gap-8">
            <ResizablePanelGroup direction="horizontal" className="border border-white/10 h-[160px]">
              <ResizablePanel defaultSize={40} className="p-4">
                <div className="text-sm text-secondary-foreground">Left</div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={60} className="p-4">
                <ScrollArea className="h-[120px] pr-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Silence is not empty; it is a surface. Form is not decoration; it is intent. Identity is not displayed; it is inhabited.
                  </p>
                </ScrollArea>
              </ResizablePanel>
            </ResizablePanelGroup>

            <Tabs defaultValue="one" className="border border-white/10 p-4">
              <TabsList>
                <TabsTrigger value="one">One</TabsTrigger>
                <TabsTrigger value="two">Two</TabsTrigger>
              </TabsList>
              <TabsContent value="one" className="mt-4 text-sm text-muted-foreground">
                Tab content one.
              </TabsContent>
              <TabsContent value="two" className="mt-4 text-sm text-muted-foreground">
                Tab content two.
              </TabsContent>
            </Tabs>

            <div className="border border-white/10 p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Piece</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Silence Coat</TableCell>
                    <TableCell className="text-right">$1,480</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Form Dress</TableCell>
                    <TableCell className="text-right">$960</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

