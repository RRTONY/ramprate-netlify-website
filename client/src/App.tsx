import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Sourcing from "./pages/Sourcing";
import Growth from "./pages/Growth";
import Web3 from "./pages/Web3";
import Impact from "./pages/Impact";
import Proof from "./pages/Proof";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Blog from "./pages/Blog";
import Process from "./pages/Process";
import Thinking from "./pages/Thinking";
import { Redirect } from "wouter";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sourcing"} component={Sourcing} />
      <Route path={"/growth"} component={Growth} />
      <Route path={"/web3"} component={Web3} />
      <Route path={"/impact"} component={Impact} />
      <Route path={"/proof"} component={Proof} />
      <Route path={"/about"} component={About} />
      <Route path={"/connect"} component={Connect} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/process"} component={Process} />
      <Route path={"/thinking"} component={Thinking} />
      <Route path={"/start"}>{() => <Redirect to="/connect" />}</Route>
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
