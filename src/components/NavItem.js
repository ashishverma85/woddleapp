/**
 * Reusable NavItem component
 * Used for bottom navigation items
 */

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { Layout } from '../constants/Dimensions';

const NavItem = ({ icon, label, style }) => {
  return (
    <View style={[styles.navItem, style]}>
      <Image source={icon} style={styles.navIcon} />
      <Text style={styles.navLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: Layout.iconSize,
    height: Layout.iconSize,
    resizeMode: 'contain',
  },
  navLabel: {
    fontSize: Typography.fontSize.xs,
    marginTop: Layout.margin.xs,
    color: Colors.navText,
    fontFamily: Typography.fontFamily.cabin,
    fontWeight: Typography.fontWeight.bold,
    lineHeight: Typography.lineHeight.tight,
  },
});

export default NavItem;
