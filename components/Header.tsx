import { View, Text, StyleSheet } from 'react-native';

type HeaderProps = {
    title: string,
    subtitle?: string,
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 64,
        paddingHorizontal: 24,
        paddingBottom: 16,
        backgroundColor: '#025b58',
    },
    testTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingBottom: 4,
        color: 'white'
    },
    textSubtitle: {
        color: "#befcf5",
        fontSize: 20,
    }
})

const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.testTitle}>{title}</Text>
            <Text style={styles.textSubtitle}>{subtitle}</Text>
        </View>
    );
}

export default Header;