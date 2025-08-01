import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
  href?: string
  rounded?: boolean
}

export default function Logo({
  size = 'md',
  showText = true,
  className = '',
  href = '/',
  rounded = false
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }

  const LogoContent = () => (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={rounded ? "/logo-round.png" : "/logo.png"}
        alt="Popcorn Rings Logo"
        width={size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 48 : 64}
        height={size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 48 : 64}
        className={sizeClasses[size]}
        priority
        unoptimized
      />
      {showText && (
        <span className={`font-bold text-popcorn-600 ${textSizes[size]}`}>
          Popcorn Rings
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="hover:opacity-80 transition-opacity">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}
