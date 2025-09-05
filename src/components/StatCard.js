/**
 * Reusable StatCard component
 * Used for displaying activity statistics (weight, diaper, feeding, sleep)
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { Layout } from '../constants/Dimensions';

const StatCard = ({ 
  label, 
  children, 
  backgroundColor, 
  style 
}) => {
  return (
    <View style={[styles.card, { backgroundColor }, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

// Export shared styles for child components
export const sharedStatStyles = StyleSheet.create({
  statBig: {
    fontSize: Typography.fontSize['4xl'], // 32px
    fontWeight: Typography.fontWeight.light, // 200 - even lighter
    // Remove fontFamily to let React Native handle font weight properly
    lineHeight: Typography.lineHeight.loose, // 38
    color: Colors.textPrimary,
  },
  statUnit: {
    fontSize: Typography.fontSize['3xl'], // 24px
    fontWeight: Typography.fontWeight.light, // 300
    lineHeight: Typography.lineHeight.normal, // 30
    color: Colors.textDark,
    marginBottom: 2,
  },
  statTime: {
    color: Colors.textMuted,
    fontSize: Typography.fontSize.xs,
    fontFamily: Typography.fontFamily.regular,
    marginTop: 'auto',
    paddingTop: Layout.padding.lg,
  },
});

const styles = StyleSheet.create({
  card: {
    width: (Layout.screenWidth - Layout.margin.lg * 2 - Layout.spacing.md) / 2,
    borderRadius: Layout.borderRadius.xl,
    paddingHorizontal: 26, // 44px left and right padding
    paddingVertical: Layout.padding.lg,
    height: Layout.cardHeight,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: Layout.margin.sm,
    marginBottom: Layout.margin.sm,
  },
  label: {
    minWidth: 50, // Increased from fixed width to minWidth
    height: 20,
    color: Colors.textDark,
    fontSize: Typography.fontSize.sm,
    marginBottom: Layout.margin.xs,
    fontWeight: Typography.fontWeight.normal,
    fontFamily: Typography.fontFamily.regular,
  },
});

export default StatCard;
