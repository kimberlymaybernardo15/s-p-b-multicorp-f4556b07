import { Lock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName?: string;
}

export default function SignInPromptDialog({ open, onOpenChange, packageName }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border max-w-md">
        <DialogHeader>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
            <Lock className="text-primary" size={22} />
          </div>
          <DialogTitle className="font-heading text-2xl metal-text">Sign In to Continue</DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2">
            {packageName ? <>To place your order for the <span className="text-foreground font-medium">{packageName}</span> package, please sign in or create an account.</> : "Please sign in or create an account to place your order."}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-col gap-3 mt-2">
          <button
            disabled
            className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold electric-glow opacity-70 cursor-not-allowed"
          >
            Sign In (coming soon)
          </button>
          <button
            disabled
            className="w-full metal-btn px-6 py-3 rounded-lg text-foreground font-heading font-semibold opacity-70 cursor-not-allowed"
          >
            Create Account (coming soon)
          </button>
          <p className="text-xs text-muted-foreground text-center pt-1">
            Authentication will be enabled in the next update.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
