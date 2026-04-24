import { ShieldCheck, Mail, Smartphone, Lock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import paypalQr from "@/assets/paypal-qr.jpg";
import { useToast } from "@/hooks/use-toast";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName?: string;
  price?: string;
  period?: string;
}

const ADMIN_EMAIL = "admin@s-b-p-multicorp.com";

export default function PaymentDialog({ open, onOpenChange, packageName, price, period }: Props) {
  const { toast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(ADMIN_EMAIL);
      toast({ title: "Email copied", description: ADMIN_EMAIL });
    } catch {
      toast({ title: "Copy failed", description: ADMIN_EMAIL });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 text-xs text-primary font-heading font-semibold tracking-widest uppercase mb-2">
            <Lock size={14} />
            <span>Secure Checkout · HTTPS</span>
          </div>
          <DialogTitle className="font-heading text-2xl metal-text">
            Complete Your Payment
          </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-1">
            Scan the QR code below with your PayPal app to pay for your selected package.
          </DialogDescription>
        </DialogHeader>

        {packageName && (
          <div className="rounded-lg border border-border bg-background/40 p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Package</p>
              <p className="font-heading font-semibold text-foreground">{packageName}</p>
            </div>
            {price && (
              <div className="text-right">
                <p className="font-heading text-2xl font-bold metal-text">{price}</p>
                {period && <p className="text-xs text-muted-foreground">{period}</p>}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col items-center gap-3 py-2">
          <div className="rounded-xl bg-white p-3 shadow-lg">
            <img
              src={paypalQr}
              alt="PayPal payment QR code for Steven Stapleton"
              className="w-56 h-56 object-contain"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Smartphone size={14} className="text-primary" />
            Scan with your PayPal app, then confirm the payment.
          </p>
        </div>

        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 space-y-2">
          <p className="font-heading font-semibold text-foreground flex items-center gap-2">
            <Mail size={16} className="text-primary" />
            After Payment
          </p>
          <p className="text-sm text-muted-foreground">
            Email a screenshot of your payment confirmation to:
          </p>
          <button
            onClick={copyEmail}
            className="w-full text-left font-mono text-sm text-primary bg-background/60 px-3 py-2 rounded border border-border hover:border-primary transition-colors break-all"
          >
            {ADMIN_EMAIL}
          </button>
          <p className="text-xs text-muted-foreground">
            Once we receive it, we'll reach out to confirm and begin the next steps for your project.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
          <ShieldCheck size={14} className="text-primary" />
          <span>Your transaction is processed securely through PayPal.</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
