/**
 * Dimension constants for consistent spacing and sizing
 */

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Layout = {
  // Screen dimensions
  screenWidth: width,
  screenHeight: height,
  
  // Margins and padding
  margin: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  
  padding: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  
  // Component dimensions
  heroHeight: 223,
  cardHeight: 173,
  navHeight: 96,
  avatarSize: 36,
  iconSize: 32,
  dotSize: 8,
  
  // Border radius
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 15,
    xxl: 20,
    full: 18, // For circular elements
  },
  
  // Spacing
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
};
