/**
 * Reusable KidCard component
 * Displays individual kid information in the carousel
 */

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { Layout } from '../constants/Dimensions';
import { Images } from '../data/images';

const KidCard = ({ kid }) => {
  return (
    <View style={styles.kidCard}>
      <Image source={kid.photo} style={styles.kidPhoto} resizeMode="cover" />
      <View style={styles.nameBadge}>
        <View style={styles.nameRow}>
          <Text style={styles.kidName} testID={`kidName-${kid.id}`}>
            {kid.name}
          </Text>
          <Image
            source={Images.arrow}
            style={styles.arrowIcon}
          />
        </View>
        <Text style={styles.kidMeta}>{kid.meta}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kidCard: {
    height: Layout.heroHeight,
    borderRadius: Layout.borderRadius.xxl,
    overflow: 'hidden',
    backgroundColor: Colors.cardBackground,
  },
  kidPhoto: {
    width: '100%',
    height: '100%',
  },
  nameBadge: {
    position: 'absolute',
    left: Layout.padding.lg,
    top: Layout.padding.lg,
    backgroundColor: Colors.surface,
    paddingHorizontal: Layout.padding.lg,
    paddingVertical: Layout.padding.sm,
    borderRadius: Layout.borderRadius.lg,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kidName: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.cabin,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.textPrimary,
  },
  arrowIcon: {
    width: 12,
    height: 12,
    marginLeft: 10,
    opacity: 1,
  },
  kidMeta: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.cabin,
    fontWeight: Typography.fontWeight.normal,
    color: Colors.textSecondary,
  },
});

export default KidCard;
