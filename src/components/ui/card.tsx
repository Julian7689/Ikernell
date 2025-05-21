import React from "react";

export function Card({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-xl bg-white/5 shadow p-6 ${className ?? ""}`}>{children}</div>;
}

export function CardHeader({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={className}>{children}</div>;
}

export function CardTitle({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <h2 className={`text-xl font-bold ${className ?? ""}`}>{children}</h2>;
}

export function CardDescription({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <p className={`text-gray-400 ${className ?? ""}`}>{children}</p>;
}

export function CardContent({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={className}>{children}</div>;
}