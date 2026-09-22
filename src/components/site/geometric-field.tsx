interface GeometricFieldProps {
  variant?: number;
  className?: string;
}

export function GeometricField({ variant = 0, className = "" }: GeometricFieldProps) {
  return (
    <div className={`geometric-field geometric-field--${variant % 4} ${className}`} aria-hidden="true">
      <span className="geometry geometry--circle" />
      <span className="geometry geometry--square" />
      <span className="geometry geometry--hexagon" />
      <span className="geometry geometry--line" />
      <span className="geometry geometry--dot geometry--dot-a" />
      <span className="geometry geometry--dot geometry--dot-b" />
    </div>
  );
}