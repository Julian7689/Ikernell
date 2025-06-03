import DashboardLayout from '@/app/components/DashboardLayout';

import { ReactNode } from 'react';

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}