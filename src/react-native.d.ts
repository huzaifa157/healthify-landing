declare module 'react-native' {
  import React from 'react';

  export interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: any;
    children?: React.ReactNode;
    accessibilityRole?: string;
    accessibilityState?: Record<string, any>;
  }

  export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: string;
    style?: any;
    children?: React.ReactNode;
    numberOfLines?: number;
  }

  export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    source?: { uri: string };
    className?: string;
    style?: any;
    accessibilityLabel?: string;
  }

  export interface PressableProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onPress?: () => void;
    className?: string;
    style?: any;
    children?: React.ReactNode;
    disabled?: boolean;
    accessibilityRole?: string;
    accessibilityState?: Record<string, any>;
    accessibilityLabel?: string;
  }

  export interface ScrollViewProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: any;
    children?: React.ReactNode;
    showsVerticalScrollIndicator?: boolean;
    showsHorizontalScrollIndicator?: boolean;
  }

  export const View: React.FC<ViewProps>;
  export const Text: React.FC<TextProps>;
  export const Image: React.FC<ImageProps>;
  export const Pressable: React.FC<PressableProps>;
  export const ScrollView: React.FC<ScrollViewProps>;
  export const StyleSheet: {
    create: <T extends Record<string, any>>(styles: T) => T;
  };
}
