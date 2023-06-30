declare module "*.svg" {
  export const ReactComponent: React.FC<
    React.PropsWithoutRef<JSX.IntrinsicElements["svg"]>
  >;

  export const content: any;
}
