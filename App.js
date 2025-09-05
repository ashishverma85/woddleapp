import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

// Import constants
import { Colors } from './src/constants/Colors';
import { Typography } from './src/constants/Typography';
import { Layout } from './src/constants/Dimensions';

// Import data
import { kidsData } from './src/data/kidsData';
import { Images } from './src/data/images';

// Import components
import KidCard from './src/components/KidCard';
import WeightCard from './src/components/WeightCard';
import DiaperCard from './src/components/DiaperCard';
import FeedingCard from './src/components/FeedingCard';
import SleepCard from './src/components/SleepCard';
import NavItem from './src/components/NavItem';

function AppContent() {
  const listRef = useRef(null);
  const [index, setIndex] = useState(0);
  const safeAreaInsets = useSafeAreaInsets();

  const onMomentumEnd = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    const i = Math.round(x / Layout.screenWidth);
    setIndex(i);
  };

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <KidCard kid={item} />
    </View>
  );

  const activeKid = kidsData[index];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Top bar */}
        <View style={styles.topBar}>
          <View style={styles.brandWrap}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
          <Image source={Images.current} style={styles.avatar} />
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <FlatList
            ref={listRef}
            data={kidsData}
            keyExtractor={(it) => String(it.id)}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            bounces={false}
            onMomentumScrollEnd={onMomentumEnd}
            testID="kidsCarousel"
          />
          <View style={styles.dots}>
            {kidsData.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  {
                    backgroundColor: i === index ? Colors.dot : Colors.dotInactive,
                    borderWidth: i === index ? 0 : 1,
                    borderColor: Colors.border,
                  },
                ]}
              />
            ))}
          </View>
        </View>

        {/* GRID */}
        <View style={styles.grid}>
          <WeightCard weight={activeKid.stats.weight} />
          <DiaperCard diaper={activeKid.stats.diaper} />
          <FeedingCard feeding={activeKid.stats.feeding} />
          <SleepCard sleep={activeKid.stats.sleep} />
        </View>

        {/* Add bottom padding to account for fixed navigation */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Bottom nav - Fixed at bottom */}
      <View style={styles.nav}>
        <NavItem
          icon={Images.home}
          label="Home"
          style={styles.navItemLeft}
        />
        <View style={styles.fab}>
          <Image source={Images.icon} style={styles.fabIcon} />
        </View>
        <NavItem
          icon={Images.dot}
          label="More"
          style={styles.navItemRight}
        />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: Layout.navHeight + 20, // Space for fixed navigation
  },

  topBar: {
    paddingHorizontal: Layout.padding.lg,
    paddingTop: Layout.padding.lg,
    paddingBottom: Layout.padding.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Layout.margin.md,
  },

  brandWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  logo: {
    width: 140,
    height: 40,
    resizeMode: 'contain',
  },

  avatar: {
    width: Layout.avatarSize,
    height: Layout.avatarSize,
    borderRadius: Layout.borderRadius.full
  },

  hero: {
    height: Layout.heroHeight + 10,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },

  carouselItem: {
    width: Layout.screenWidth,
    paddingHorizontal: Layout.padding.lg,
  },

  dots: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  dot: {
    width: Layout.dotSize,
    height: Layout.dotSize,
    borderRadius: Layout.dotSize / 2,
    marginHorizontal: Layout.margin.xs
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Layout.padding.lg,
    paddingTop: Layout.margin.md,
    gap: Layout.spacing.md,
  },

  bottomPadding: {
    height: 20,
  },

  nav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: Layout.navHeight,
    backgroundColor: Colors.navBackground,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: Layout.padding.xxl,
    borderTopLeftRadius: Layout.borderRadius.xxl,
    borderTopRightRadius: Layout.borderRadius.xxl,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  navItemLeft: {
    position: 'absolute',
    left: '15%',
  },

  navItemRight: {
    position: 'absolute',
    right: '15%',
  },

  fab: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fabIcon: {
    width: 92,
    height: 92,
  },
});