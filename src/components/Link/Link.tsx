interface LinkProps {
  mode: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  href: string;
  target: string;
  children: React.ReactNode;
}

const sizes = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
};

const modes = {
  primary: 'app-color-deep-dark-blue hover:app-color-blue font-semibold',
  secondary: 'app-color-blue hover:app-color-deep-dark-blue',
};

export default function Link({ mode, size, href, target, children }: LinkProps) {
  return (
    <a href={href} target={target} className={`${sizes[size]} ${modes[mode]} underline`}>
      {children}
    </a>
  );
}
