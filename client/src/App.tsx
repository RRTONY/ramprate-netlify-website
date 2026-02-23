import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sourcing"} component={() => <div>Sourcing</div>} />
      <Route path={"/growth"} component={() => <div>Growth</div>} />
      <Route path={"/web3"} component={() => <div>Web3</div>} />
      <Route path={"/impact"} component={() => <div>Impact</div>} />
      <Route path={"/proof"} component={() => <div>Proof</div>} />
      <Route path={"/about"} component={() => <div>About</div>} />
      <Route path={"/connect"} component={() => <div>Connect</div>} />
      <Route path={"/blog"} component={() => <div>Blog</div>} />
      <Route path={"/blog/:slug"} component={() => <div>Blog Post</div>} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
