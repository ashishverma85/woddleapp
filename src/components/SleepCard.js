/**
 * Sleep-specific card component
 * Displays sleep duration statistics
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { Layout } from '../constants/Dimensions';
import StatCard, { sharedStatStyles } from './StatCard';

const SleepCard = ({ sleep }) => {
  return (
    <StatCard 
      label="Sleep" 
      backgroundColor={Colors.sleepCard}
    >
      <View style={styles.sleepRow}>
        <Text style={sharedStatStyles.statBig}>{sleep.duration.h}</Text>
        <Text style={sharedStatStyles.statUnit}>h</Text>
        <Text style={styles.spacer} />
        <Text style={sharedStatStyles.statBig}>{sleep.duration.m}</Text>
        <Text style={sharedStatStyles.statUnit}>m</Text>
      </View>
      <Text style={sharedStatStyles.statTime}>{sleep.ago}</Text>
    </StatCard>
  );
};

const styles = StyleSheet.create({
  sleepRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 0,
  },
  spacer: {
    width: Layout.spacing.sm,
  },
});

export default SleepCard;
