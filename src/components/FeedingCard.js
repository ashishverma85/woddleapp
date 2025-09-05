/**
 * Feeding-specific card component
 * Displays feeding statistics
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { Layout } from '../constants/Dimensions';
import StatCard, { sharedStatStyles } from './StatCard';

const FeedingCard = ({ feeding }) => {
  return (
    <StatCard 
      label="Feeding" 
      backgroundColor={Colors.feedingCard}
    >
      <Text style={sharedStatStyles.statBig}>{feeding.type}</Text>
      <View style={styles.feedingRow}>
        <Text style={sharedStatStyles.statBig}>
          {feeding.amount.replace(/oz$/, '')}
        </Text>
        <Text style={sharedStatStyles.statUnit}>oz</Text>
      </View>
      <Text style={sharedStatStyles.statTime}>{feeding.ago}</Text>
    </StatCard>
  );
};

const styles = StyleSheet.create({
  feedingRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 0,
  },
});

export default FeedingCard;
