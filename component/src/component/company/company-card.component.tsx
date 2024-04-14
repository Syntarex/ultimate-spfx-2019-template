import {
    Button,
    Caption2,
    Card,
    CardHeader,
    Link,
    Text,
    makeStyles,
    shorthands,
    tokens,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular, Phone12Regular } from "@fluentui/react-icons";
import React from "react";
import { Company } from "../../model/list-items/company.model";

const useStyles = makeStyles({
    card: {
        minWidth: "340px",
        maxWidth: "420px",
    },
    headerImage: {
        ...shorthands.borderRadius("4px"),
        maxWidth: "44px",
        maxHeight: "44px",
    },
    description: {
        color: tokens.colorNeutralForeground3,
    },
    phoneNumber: {
        display: "flex",
        alignItems: "center",
        columnGap: tokens.spacingHorizontalXS,
    },
});

interface CompanyCardProps {
    value: Company;
}

export const CompanyCard = ({ value }: CompanyCardProps) => {
    const styles = useStyles();

    return (
        <Card className={styles.card}>
            <CardHeader
                image={
                    value.USpfxImage && (
                        <img
                            className={styles.headerImage}
                            src={value.USpfxImage.Url}
                            alt={value.USpfxImage.Description}
                        />
                    )
                }
                header={<Text weight={"semibold"}>{value.Title}</Text>}
                description={
                    value.USpfxWebsite && (
                        <Link className={styles.description} href={value.USpfxWebsite.Url} target={"_blank"}>
                            {value.USpfxWebsite.Description}
                        </Link>
                    )
                }
                action={<Button appearance={"transparent"} icon={<MoreHorizontal20Regular />} />}
            />

            {value.USpfxDescription && <Text>{value.USpfxDescription}</Text>}

            {value.USpfxPhoneNumber && (
                <div className={styles.phoneNumber}>
                    <Phone12Regular />

                    <Caption2>{value.USpfxPhoneNumber}</Caption2>
                </div>
            )}
        </Card>
    );
};
