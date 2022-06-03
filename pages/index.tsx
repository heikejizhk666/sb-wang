import Head from "next/head";
import React, { useEffect } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Box, Container, CssBaseline, Theme, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import logoImage from "../images/logo.png";
import { useAppDispatch } from "../store/hooks";
import { setTitle } from "../store/view";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            // height: "100%",
            minHeight: "calc(100vh - 24px)",
            marginBottom: theme.spacing(-8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "& >*": {
                marginTop: theme.spacing(1),
                fontFamily: '"Roboto", "Noto Sans SC", sans-serif',
            },
        },
        title: {
            marginTop: theme.spacing(4),
        },
        avatar: {
            borderRadius: "50%",
            [theme.breakpoints.down("md")]: {
                width: 160,
                height: 160,
            },
            width: 280,
            height: 280,
        },
    })
);

export default function Home() {
    const classes = useStyles();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTitle("Home"));
    }, [dispatch]);

    return (
        <>
            <Head>
                <meta
                    name={"description"}
                    content={"大傻逼网"}
                />
                <link rel="prefetch" href="//stat.ahdark.com" />
            </Head>

            <CssBaseline />
            <NavBar />
            <Container maxWidth={"md"}>
                <Box className={classes.main}>
                    <Typography
                        variant={"h3"}
                        component={"h1"}
                        className={classes.title}
                        align={"center"}
                    >
                        {"欢迎提交大傻逼"}
                    </Typography>
                    <Typography
                        variant={"body1"}
                        component={"p"}
                        align={"center"}
                    >
                        {"侧边栏可通过左上角按钮控制开合    "}
                    </Typography>
                </Box>
                <Footer />
            </Container>
        </>
    );
}
