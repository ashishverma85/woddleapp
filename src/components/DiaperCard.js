/**
 * Diaper-specific card component
 * Displays diaper change statistics
 */

import React from 'react';
import { Text } from 'react-native';
import { Colors } from '../constants/Colors';
import StatCard, { sharedStatStyles } from './StatCard';

const DiaperCard = ({ diaper }) => {
  return (
    <StatCard 
      label="Diaper" 
      backgroundColor={Colors.diaperCard}
    >
      <Text style={sharedStatStyles.statBig}>{diaper.type}</Text>
      <Text style={sharedStatStyles.statBig}>{diaper.size}</Text>
      <Text style={sharedStatStyles.statTime}>{diaper.ago}</Text>
    </StatCard>
  );
};

export default DiaperCard;
