import { TextProps } from 'react-native'; // Importe TextProps do react-native
import styled from 'styled-components/native';
import { colors, fonts } from './themes';

interface CustomTextProps extends TextProps {
  color?: string; // Adicione a propriedade color ao tipo
}

export const TitleG = styled.Text`
  font-size: 32px;
  color: ${colors.base.gray100};
  font-weight: bold;
  font-family: ${fonts.bold};
`;

export const TitleM = styled.Text`
  font-size: 24px;
  color: ${colors.base.gray100};
  font-weight: bold;
  font-family: ${fonts.bold};
`;

export const TitleS = styled.Text`
  font-size: 18px;
  color: ${colors.base.gray100};
  font-weight: bold;
  font-family: ${fonts.bold};
`;

export const TitleXS = styled.Text`
  font-size: 14px;
  color: ${colors.base.gray100};
  font-weight: bold;
  font-family: ${fonts.bold};
`;

export const BodyM = styled.Text<CustomTextProps>`
  font-size: 16px;
  color: ${props => props.color || colors.base.gray100};
  font-family: ${fonts.regular};
`;

export const BodyS = styled.Text<CustomTextProps>`
  font-size: 14px;
  color: ${props => props.color || colors.base.gray100};
  font-family: ${fonts.regular};
`;

export const BodyXS = styled.Text<CustomTextProps>`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color || colors.base.gray100};
  font-family: ${fonts.bold};
`;

export const VerticalDivider = styled.View`
  height: 20px;
  width: 1px;
  background-color: ${colors.base.gray400};
`;

export const RedCircular = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 99px;
  background-color: ${colors.product.redMid};
`;

export const GreenCircular = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 99px;
  background-color: ${colors.product.greenMid};
`;
