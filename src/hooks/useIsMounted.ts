import { useEffect, useState } from "react";

// This hook is needed to prevent hydration errors when using the useTheme hook from
// the next/themes library.

// Note that we cannot load the skeleton component when the page is being server-side rendered
// because the skeleton component uses the useTheme hook.

// Next/themes docs: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
// Next docs: https://nextjs.org/docs/messages/react-hydration-error
export const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return { mounted };
};
