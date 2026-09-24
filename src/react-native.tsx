import React from 'react';

export interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties | any;
  children?: React.ReactNode;
  accessibilityRole?: string;
  accessibilityState?: Record<string, any>;
}

export const View = React.forwardRef<HTMLDivElement, ViewProps>(
  ({ className = '', style, children, accessibilityRole, accessibilityState, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role={accessibilityRole}
        style={style}
        className={className}
        {...props}
      >
        {children}
      </div>
    );
  }
);
View.displayName = 'View';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  style?: React.CSSProperties | any;
  children?: React.ReactNode;
  numberOfLines?: number;
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ className = '', style, children, numberOfLines, ...props }, ref) => {
    return (
      <span
        ref={ref}
        style={style}
        className={className}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Text.displayName = 'Text';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  source?: { uri: string } | string;
  src?: string;
  className?: string;
  style?: React.CSSProperties | any;
  accessibilityLabel?: string;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ source, src, className = '', style, accessibilityLabel, alt, ...props }, ref) => {
    let imageSrc = '';
    if (typeof source === 'object' && source !== null && 'uri' in source) {
      imageSrc = source.uri;
    } else if (typeof source === 'string') {
      imageSrc = source;
    } else if (src) {
      imageSrc = src;
    }

    return (
      <img
        ref={ref}
        src={imageSrc}
        alt={accessibilityLabel || alt || 'Healthify'}
        style={style}
        className={className}
        loading="lazy"
        {...props}
      />
    );
  }
);
Image.displayName = 'Image';

export interface PressableProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onPress?: () => void;
  className?: string;
  style?: React.CSSProperties | any;
  children?: React.ReactNode;
  disabled?: boolean;
  accessibilityRole?: string;
  accessibilityState?: Record<string, any>;
  accessibilityLabel?: string;
}

export const Pressable = React.forwardRef<HTMLButtonElement, PressableProps>(
  ({ onPress, onClick, className = '', style, children, disabled, type = 'button', accessibilityLabel, accessibilityRole, accessibilityState, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onPress || onClick}
        aria-label={accessibilityLabel}
        aria-expanded={accessibilityState?.expanded}
        style={style}
        className={className}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Pressable.displayName = 'Pressable';

export interface ScrollViewProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties | any;
  children?: React.ReactNode;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
}

export const ScrollView = React.forwardRef<HTMLDivElement, ScrollViewProps>(
  ({ className = '', style, children, showsVerticalScrollIndicator, showsHorizontalScrollIndicator, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className={`overflow-y-auto ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ScrollView.displayName = 'ScrollView';

export const StyleSheet = {
  create: <T extends Record<string, any>>(styles: T): T => styles,
};

export default {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
};
