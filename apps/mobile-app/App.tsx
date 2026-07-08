import "./global.css";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import Svg, { Path } from "react-native-svg";

interface Transaction {
  direction: "in" | "out";
  party: string;
  time: string;
  amount: string;
}

interface AccountData {
  accountName: string;
  balance: string;
  moneyFlowDirection: string;
  chartPath: string;
  chartFillPath: string;
  transactions: Transaction[];
}

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const screenWidth = Dimensions.get("window").width;
  const gridItemWidth = (screenWidth - 48 - 16) / 2; // Adjusted spacing for the grid

  const [currentIndex, setCurrentIndex] = useState(0);

  const accounts: AccountData[] = [
    {
      accountName: "Bulk Payment Account",
      balance: "100.00",
      moneyFlowDirection: "Money In",
      chartPath: "M 0 85 L 40 85 L 120 40 L 200 65 L 280 20 L 360 10 L 400 15",
      chartFillPath:
        "M 0 85 L 40 85 L 120 40 L 200 65 L 280 20 L 360 10 L 400 15 L 400 100 L 0 100 Z",
      transactions: [
        {
          direction: "out",
          party: "0779999410",
          time: "11:45 AM • Money Out",
          amount: "- UGX 10,000",
        },
        {
          direction: "in",
          party: "Collection Hub B",
          time: "09:12 AM • Money In",
          amount: "+ UGX 450,000",
        },
      ],
    },
    {
      accountName: "Operational Escrow Ledger",
      balance: "14,820,500",
      moneyFlowDirection: "Settled",
      chartPath: "M 0 50 L 80 60 L 160 30 L 240 45 L 320 15 L 400 10",
      chartFillPath:
        "M 0 50 L 80 60 L 160 30 L 240 45 L 320 15 L 400 10 L 400 100 L 0 100 Z",
      transactions: [
        {
          direction: "in",
          party: "Bank Settlement",
          time: "04:30 PM • Incoming",
          amount: "+ UGX 8,500,000",
        },
        {
          direction: "out",
          party: "URA Tax Remit",
          time: "02:15 PM • Statutory",
          amount: "- UGX 2,100,000",
        },
      ],
    },
    {
      accountName: "Merchant Collection Wallet",
      balance: "3,150,000",
      moneyFlowDirection: "Money In",
      chartPath: "M 0 90 L 100 70 L 200 80 L 300 40 L 400 20",
      chartFillPath:
        "M 0 90 L 100 70 L 200 80 L 300 40 L 400 20 L 400 100 L 0 100 Z",
      transactions: [
        {
          direction: "in",
          party: "Pos Terminal 04",
          time: "01:05 PM • QuickPay",
          amount: "+ UGX 85,000",
        },
        {
          direction: "in",
          party: "Web Checkout API",
          time: "12:54 PM • Online",
          amount: "+ UGX 120,000",
        },
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? accounts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === accounts.length - 1 ? 0 : prev + 1));
  };

  const activeAccount = accounts[currentIndex];

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="bg-momo-blue dark:bg-slate-950 transition-colors"
    >
      <StatusBar style="light" />

      {/* Header View */}
      <View className="flex-row items-center justify-between px-6 py-5 bg-momo-blue dark:bg-slate-950">
        <View className="flex-row items-center gap-3.5">
          <View className="w-11 h-11 bg-momo-yellow rounded-xl items-center justify-center">
            <Text className="text-momo-blue font-black text-2xl">▲</Text>
          </View>
          <Text className="text-white font-bold text-xl tracking-tight">
            MoMo Business
          </Text>
        </View>

        <TouchableOpacity
          onPress={toggleColorScheme}
          className="bg-white/10 dark:bg-slate-800 px-4 py-2.5 rounded-full border border-white/20 active:opacity-70"
        >
          <Text className="text-white font-bold text-sm">
            {isDark ? "🌙 Dark" : "☀️ Light"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Body Canvas */}
      <ScrollView
        className="flex-1 bg-momo-bgLight dark:bg-slate-900"
        contentContainerStyle={{ flexGrow: 1, padding: 24, paddingBottom: 60 }}
      >
        {/* INTERACTIVE ALIGNED DASHBOARD COMPONENT */}
        <View className="bg-white dark:bg-slate-900 p-6 rounded-momo-card border border-slate-200/60 dark:border-slate-800 shadow-md mb-6 relative">
          {/* Header Data Blocks */}
          <View className="flex-row justify-between items-start mb-5 pr-20">
            <View className="flex-1">
              <Text className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {activeAccount.accountName}
              </Text>
              <Text className="text-3xl font-black text-momo-darkText dark:text-white mt-1.5 tracking-tight">
                UGX {activeAccount.balance}{" "}
                <Text className="text-lg opacity-60">👁️</Text>
              </Text>
            </View>

            <View className="bg-momo-bgLight dark:bg-slate-800 px-3 py-1.5 rounded-momo-input flex-row items-center gap-2 border border-slate-100 dark:border-slate-700">
              <View
                className={`w-2 h-2 rounded-full ${activeAccount.moneyFlowDirection === "Settled" ? "bg-emerald-500" : "bg-amber-500"}`}
              />
              <Text className="text-slate-600 dark:text-slate-300 font-bold text-xs">
                {activeAccount.moneyFlowDirection}
              </Text>
            </View>
          </View>

          {/* REALTIME VISUAL ANALYTICS COMPONENT */}
          <View className="h-32 pt-2 relative flex-row items-end mb-6">
            {/* Y Axis Guides */}
            <View className="absolute left-0 bottom-0 top-0 w-12 flex-col justify-between pr-2 items-end z-10">
              <Text className="text-[9px] font-bold text-slate-400">50.0M</Text>
              <Text className="text-[9px] font-bold text-slate-400">25.0M</Text>
              <Text className="text-[9px] font-bold text-slate-400">0</Text>
            </View>

            {/* SVG Plot Canvas Block */}
            <View className="flex-1 h-full ml-14 relative justify-end">
              <Svg
                style={{ width: "100%", height: "100%", overflow: "visible" }}
                viewBox="0 0 400 100"
                preserveAspectRatio="none"
              >
                <Path
                  d={activeAccount.chartFillPath}
                  fill={
                    isDark
                      ? "rgba(255, 204, 0, 0.15)"
                      : "rgba(255, 204, 0, 0.25)"
                  }
                />
                <Path
                  d={activeAccount.chartPath}
                  fill="none"
                  stroke="#ffcc00"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </Svg>

              {/* X Axis Coordinates layer */}
              <View className="absolute left-0 right-0 -bottom-6 flex-row justify-between px-1">
                <Text className="text-[9px] font-bold text-slate-400 text-center leading-tight">
                  90{"\n"}
                  <Text className="text-[7px] font-normal">Days</Text>
                </Text>
                <Text className="text-[9px] font-bold text-slate-400">60</Text>
                <Text className="text-[9px] font-bold text-slate-400">30</Text>
                <Text className="text-[9px] font-bold text-slate-400">0</Text>
              </View>
            </View>
          </View>

          {/* Micro Segment Line Divider */}
          <View className="h-[1px] bg-slate-100 dark:bg-slate-800 my-2 mt-4" />

          {/* Connected Activity Feed Subsection */}
          <View className="mt-3">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="font-bold text-momo-darkText dark:text-slate-300 text-sm">
                Recent Activity
              </Text>
              <Text className="text-momo-blue dark:text-sky-400 underline font-bold text-xs">
                View All
              </Text>
            </View>

            {/* Account Specific Transactions */}
            <View className="gap-y-2.5">
              {activeAccount.transactions.map((tx, idx) => (
                <View
                  key={idx}
                  className="flex-row items-center justify-between py-2 border-b border-slate-50 dark:border-slate-800/40"
                >
                  <View className="flex-row items-center gap-3">
                    <View
                      className={`w-8 h-8 items-center justify-center rounded-full ${tx.direction === "out" ? "bg-red-50 dark:bg-red-950/30" : "bg-emerald-50 dark:bg-emerald-950/30"}`}
                    >
                      <Text
                        className={`font-black text-sm ${tx.direction === "out" ? "text-red-500" : "text-emerald-500"}`}
                      >
                        {tx.direction === "out" ? "↑" : "↓"}
                      </Text>
                    </View>
                    <View>
                      <Text className="font-bold text-sm text-slate-700 dark:text-slate-300 tracking-tight">
                        {tx.party}
                      </Text>
                      <Text className="text-[10px] text-slate-400 mt-0.5">
                        {tx.time}
                      </Text>
                    </View>
                  </View>
                  <Text
                    className={`font-bold text-sm ${tx.direction === "out" ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400"}`}
                  >
                    {tx.amount}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Action Tray Buttons */}
          <View className="flex-row gap-2.5 mt-5">
            <TouchableOpacity className="flex-1 py-3 rounded-momo-btn border border-momo-blue items-center justify-center active:opacity-60">
              <Text className="text-momo-blue dark:text-sky-400 font-bold text-sm">
                Buy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 py-3 rounded-momo-btn border border-momo-blue items-center justify-center active:opacity-60">
              <Text className="text-momo-blue dark:text-sky-400 font-bold text-sm">
                Pay
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 py-3 rounded-momo-btn bg-momo-blue items-center justify-center active:opacity-90">
              <Text className="text-white font-bold text-sm">Transfer</Text>
            </TouchableOpacity>
          </View>

          {/* Floating Controls Layer */}
          <View className="absolute top-4 right-4 flex-row items-center gap-2 bg-slate-50 dark:bg-slate-800 px-2.5 py-1.5 rounded-full border border-slate-100 dark:border-slate-700">
            <Text className="text-[10px] font-bold text-slate-400 font-mono">
              {currentIndex + 1}/{accounts.length}
            </Text>
            <TouchableOpacity
              onPress={handlePrev}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 5 }}
              className="w-6 h-6 bg-white dark:bg-slate-700 rounded-full items-center justify-center shadow-xs"
            >
              <Text className="text-slate-600 dark:text-slate-300 font-bold text-sm">
                ‹
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleNext}
              hitSlop={{ top: 10, bottom: 10, left: 5, right: 10 }}
              className="w-6 h-6 bg-white dark:bg-slate-700 rounded-full items-center justify-center shadow-xs"
            >
              <Text className="text-slate-600 dark:text-slate-300 font-bold text-sm">
                ›
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SHORTCUTS REGION */}
        <Text className="font-bold text-momo-darkText dark:text-slate-300 text-lg mb-4">
          Quick Shortcuts
        </Text>

        <View className="flex-row flex-wrap justify-between gap-y-4">
          {[
            { label: "Create Invoice", icon: "📄" },
            { label: "Seller Hub", icon: "🛒" },
            { label: "Get Paid", icon: "📲" },
            { label: "Recharge", icon: "💳" },
          ].map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={{ width: gridItemWidth }}
              className="bg-momo-blue dark:bg-slate-800 p-6 rounded-momo-card items-center justify-center gap-2.5 shadow-sm active:opacity-90"
            >
              <Text className="text-4xl text-momo-yellow mb-1">
                {item.icon}
              </Text>
              <Text className="text-white font-bold text-sm text-center leading-snug">
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer Nav Links Bracket */}
      <View className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex-row justify-around py-4">
        <TouchableOpacity className="items-center justify-center px-5">
          <Text className="text-2xl text-momo-blue dark:text-momo-yellow">
            🏠
          </Text>
          <Text className="text-[11px] font-bold text-momo-blue dark:text-momo-yellow mt-1">
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center justify-center px-5 opacity-40">
          <Text className="text-2xl text-slate-600 dark:text-slate-400">
            💸
          </Text>
          <Text className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-1">
            Transfer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center justify-center px-5 opacity-40">
          <Text className="text-2xl text-slate-600 dark:text-slate-400">
            📊
          </Text>
          <Text className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-1">
            Transact
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
