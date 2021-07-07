// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>홈 페이지입니다!</Text>
		</View>
	);
}

function routineScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>동네생활 페이지입니다!</Text>
		</View>
	);
}

function nearbyScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>내 근처 페이지입니다!</Text>
		</View>
	);
}

function chatScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>채팅 페이지입니다!</Text>
		</View>
	);
}

function mycarrotScreen() {
	const buttonList = {
		first: {
			headerTitle: "김민성입니다",
			subTitle: "반갑습니다! #12345",
			button: [
				{ iconName: "reader", title: "판매내역" },
				{ iconName: "basket", title: "구매내역" },
				{ iconName: "heart", title: "관심목록" },
			],
		},
		second: [
			{ iconName: "location-outline", title: "내 동네 설정" },
			{ iconName: "locate-outline", title: "동네 인증하기" },
			{ iconName: "pricetag-outline", title: "키워드 알림" },
			{ iconName: "grid-outline", title: "모아보기" },
			{ iconName: "options-outline", title: "관심 카테고리 설정" },
		],
		third: [
			{ iconName: "reader-outline", title: "동네생활 글" },
			{ iconName: "chatbubble-outline", title: "동네생활 댓글" },
			{ iconName: "star-outline", title: "동네생활 주제 목록" },
		],
		fourth: [
			{ iconName: "body-outline", title: "비즈프로필 만들기" },
			{ iconName: "receipt-outline", title: "동네홍보 글" },
			{ iconName: "megaphone-outline", title: "지역 광고" },
		],
		fifth: [
			{ iconName: "mail-outline", title: "친구초대" },
			{ iconName: "share-social-outline", title: "당근마켓 공유" },
			{ iconName: "mic-outline", title: "공지사항" },
			{ iconName: "headset-outline", title: "자주 묻는 질문" },
			{ iconName: "settings-outline", title: "앱 설정" },
		],
	};
	return (
		<ScrollView>
			<View
				style={{
					flex: 5,
					backgroundColor: "white",
					marginBottom: 10,
				}}
			>
				<View style={{ flexDirection: "row", marginTop: 30, marginBottom: 20 }}>
					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: "#eee",
							width: 80,
							height: 80,
							borderRadius: 50,
							marginLeft: 20,
							marginRight: 20,
						}}
					>
						<TouchableOpacity>
							<Icon name="person-add-outline" size={50} />
						</TouchableOpacity>
					</View>
					<View
						style={{
							flex: 4,
							justifyContent: "center",
						}}
					>
						<TouchableOpacity>
							<Text
								style={{ fontSize: 23, fontWeight: "bold", marginBottom: 10 }}
							>
								{buttonList.first.headerTitle}
							</Text>
							<Text style={{ color: "#171C24" }}>
								{buttonList.first.subTitle}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						width: "95%",
						height: 40,
						marginLeft: "2.5%",
						borderRadius: 10,
						borderWidth: 2,
						borderColor: "#eee",
					}}
				>
					<TouchableOpacity
						style={{
							width: "100%",
							height: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text style={{ fontSize: 15, fontWeight: "bold" }}>
							프로필 보기
						</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						margin: 20,
					}}
				>
					{buttonList.first.button.map((el) => (
						<TouchableOpacity
							style={{
								margin: 20,
								marginLeft: 35,
								marginRight: 35,
								borderRadius: 50,
								width: 50,
								height: 50,
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<View
								style={{
									backgroundColor: "#F6E8E0",
									borderRadius: 50,
									width: 70,
									height: 70,
									alignItems: "center",
									justifyContent: "center",
									marginBottom: 10,
								}}
							>
								<Icon name={el.iconName} size={30} color="#F8863C" />
							</View>
							<Text>{el.title}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
			<View
				style={{
					flex: 5,
					backgroundColor: "white",
					marginBottom: 10,
				}}
			>
				{buttonList.second.map((el) => (
					<TouchableOpacity
						style={{
							flex: 1,
							flexDirection: "row",
							paddingLeft: 10,
							paddingTop: 10,
							paddingBottom: 10,
						}}
					>
						<Icon name={el.iconName} size={30} style={{ margin: 5 }} />
						<Text
							style={{
								fontSize: 18,
								marginLeft: 10,
								marginTop: 10,
							}}
						>
							{el.title}
						</Text>
					</TouchableOpacity>
				))}
			</View>
			<View
				style={{
					flex: 3,
					backgroundColor: "white",
					marginBottom: 10,
				}}
			>
				{buttonList.third.map((el) => (
					<TouchableOpacity
						style={{
							flex: 1,
							flexDirection: "row",
							paddingLeft: 10,
							paddingTop: 10,
							paddingBottom: 10,
						}}
					>
						<Icon name={el.iconName} size={30} style={{ margin: 5 }} />
						<Text
							style={{
								fontSize: 18,
								marginLeft: 10,
								marginTop: 10,
							}}
						>
							{el.title}
						</Text>
					</TouchableOpacity>
				))}
			</View>
			<View
				style={{
					flex: 3,
					backgroundColor: "white",
					marginBottom: 10,
				}}
			>
				{buttonList.fourth.map((el) => (
					<TouchableOpacity
						style={{
							flex: 1,
							flexDirection: "row",
							paddingLeft: 10,
							paddingTop: 10,
							paddingBottom: 10,
						}}
					>
						<Icon name={el.iconName} size={30} style={{ margin: 5 }} />
						<Text
							style={{
								fontSize: 18,
								marginLeft: 10,
								marginTop: 10,
							}}
						>
							{el.title}
						</Text>
					</TouchableOpacity>
				))}
			</View>
			<View
				style={{
					flex: 5,
					backgroundColor: "white",
					marginBottom: 10,
				}}
			>
				{buttonList.fifth.map((el) => (
					<TouchableOpacity
						style={{
							flex: 1,
							flexDirection: "row",
							paddingLeft: 10,
							paddingTop: 10,
							paddingBottom: 10,
						}}
					>
						<Icon name={el.iconName} size={30} style={{ margin: 5 }} />
						<Text
							style={{
								fontSize: 18,
								marginLeft: 10,
								marginTop: 10,
							}}
						>
							{el.title}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	);
}

const Stack = createStackNavigator();

function Home() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ title: "여기는" }}
			/>
		</Stack.Navigator>
	);
}

function routine() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="setting"
				component={routineScreen}
				options={{ title: "여기는" }}
			/>
		</Stack.Navigator>
	);
}
function nearby() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="nearby"
				component={nearbyScreen}
				options={{ title: "여기는" }}
			/>
		</Stack.Navigator>
	);
}

function chat() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="chat"
				component={chatScreen}
				options={{ title: "여기는" }}
			/>
		</Stack.Navigator>
	);
}
function mycarrot() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="mycarrot"
				component={mycarrotScreen}
				options={{
					title: "나의 당근",
					headerTitleAlign: "left",
					headerTitleStyle: {
						fontWeight: "bold",
						fontSize: 20,
					},

					headerRight: () => (
						<TouchableOpacity
							style={{ marginRight: 25 }}
							onPress={() => {
								alert("설정버튼 입니다!");
							}}
						>
							<Icon name="settings-outline" color="#000" size={25} />
						</TouchableOpacity>
					),
				}}
			/>
		</Stack.Navigator>
	);
}

function MyTabs() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="mycarrot"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Home") {
							iconName = focused ? "home" : "home-outline";
						} else if (route.name === "routine") {
							iconName = focused ? "newspaper" : "newspaper-outline";
						} else if (route.name === "nearby") {
							iconName = focused ? "location" : "location-outline";
						} else if (route.name === "chat") {
							iconName = focused ? "chatbubbles" : "chatbubbles-outline";
						} else if (route.name === "mycarrot") {
							iconName = focused ? "person" : "person-outline";
						}

						return <Icon name={iconName} size={25} color="#000" />;
					},
				})}
				tabBarOptions={{
					activeTintColor: "#000",
					inactiveTintColor: "#000",
				}}
			>
				<Tab.Screen name="Home" component={Home} options={{ title: "홈" }} />
				<Tab.Screen
					name="routine"
					component={routine}
					options={{ title: "동네생활" }}
				/>
				<Tab.Screen
					name="nearby"
					component={nearby}
					options={{ title: "내 근처" }}
				/>
				<Tab.Screen name="chat" component={chat} options={{ title: "채팅" }} />
				<Tab.Screen
					name="mycarrot"
					component={mycarrot}
					options={{ title: "나의 당근" }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default MyTabs;
