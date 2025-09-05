/**
 * Weight-specific card component
 * Displays weight statistics with lbs and oz
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { Layout } from '../constants/Dimensions';
import StatCard, { sharedStatStyles } from './StatCard';

const WeightCard = ({ weight }) => {
  return (
    <StatCard 
      label="Weight" 
      backgroundColor={Colors.weightCard}
    >
      <View style={styles.weightRow}>
        <Text style={sharedStatStyles.statBig}>{weight.lbs}</Text>
        <Text style={sharedStatStyles.statUnit}>lbs</Text>
      </View>
      <View style={styles.weightRow}>
        <Text style={sharedStatStyles.statBig}>{weight.oz}</Text>
        <Text style={sharedStatStyles.statUnit}>oz</Text>
      </View>
      <Text style={sharedStatStyles.statTime}>{weight.time}</Text>
    </StatCard>
  );
};

const styles = StyleSheet.create({
  weightRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Layout.spacing.sm,
  },
});

export default WeightCard;
