import { ComponentProps, ElementType, PropsWithChildren } from 'react';
import Style from './container.module.scss';

type AsProp<E extends ElementType> = {
  as?: E;
};

type OwnProps<E extends ElementType, P = object> = P & AsProp<E>;

type PolymorphicProps<E extends ElementType, P = object> = PropsWithChildren<OwnProps<E, P>> &
  Omit<ComponentProps<E>, keyof OwnProps<E, P>>;

type LetterSpasingType = {
  letterSpacing?: number;
};

const Container = <E extends ElementType = 'div'>({
  as,
  children,
  letterSpacing,
  style,
  ...rest
}: PolymorphicProps<E, LetterSpasingType>) => {
  const TagName = as || 'div';
  return (
    <TagName style={{ ...style, letterSpacing }} {...rest} className={Style.container}>
      {children}
    </TagName>
  );
};
export default Container;
/**
 *
 * type TextOwnProps<E extends ElementType> = AsProp<E> & {
 * letterSpacing?: number;
 *};
 *type TextProps<E extends ElementType> = PropsWithChildren<TextOwnProps<E>> &
 * Omit<ComponentProps<E>, keyof TextOwnProps<E>>;
 *
 *
 *
 *
 *
 *
 *
 */
