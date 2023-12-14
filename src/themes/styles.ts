import { TextProps } from 'react-native'; // Importe TextProps do react-native
import styled from 'styled-components/native';
import { colors, fonts } from './themes';

interface CustomTextProps extends TextProps {
  color?: string; // Adicione a propriedade color ao tipo
  size?: string;
  textAlign?: string;
}

export const TitleG = styled.Text<CustomTextProps>`
  font-size: 32px;
  color: ${colors.base.gray100};
  font-weight: bold;
  font-family: ${fonts.bold};
  text-align: ${props => props.textAlign || 'auto'};
`;

export const TitleM = styled.Text<CustomTextProps>`
  font-size: 24px;
  color: ${props => props.color || colors.base.gray100};
  font-weight: bold;
  font-family: ${fonts.bold};
  text-align: ${props => props.textAlign || 'auto'};
`;

export const TitleS = styled.Text<CustomTextProps>`
  font-size: 18px;
  color: ${colors.base.gray100};
  font-weight: bold;
  font-family: ${fonts.bold};
  text-align: ${props => props.textAlign || 'auto'};
`;

export const TitleXS = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || '14px'};
  color: ${colors.base.gray100};
  font-weight: bold;
  font-family: ${fonts.bold};
  text-align: ${props => props.textAlign || 'auto'};
`;

export const BodyM = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || '16px'};
  color: ${props => props.color || colors.base.gray100};
  font-family: ${fonts.regular};
  text-align: ${props => props.textAlign || 'auto'};
`;

export const BodyS = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || '14px'};
  color: ${props => props.color || colors.base.gray100};
  font-family: ${fonts.regular};
  text-align: ${props => props.textAlign || 'auto'};
`;

export const BodyXS = styled.Text<CustomTextProps>`
  font-size: ${props => props.size || '12px'};
  font-weight: bold;
  color: ${props => props.color || colors.base.gray100};
  font-family: ${fonts.bold};
  text-align: ${props => props.textAlign || 'auto'};
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

export const Gap = styled.View`
  height: 400px;
`;
