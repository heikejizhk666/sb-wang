import React from "react";
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box component={"footer"} textAlign={"center"} sx={{ margin: 1 }}>
            <Typography variant={"body2"} component={"p"}>
                {"Copyright © 2022 "}
                <Link
                    href={"https://github.com/heikejizhk666/sb"}
                    underline={"none"}
                    rel={"self noopener"}
                    target={"_blank"}
                    fontWeight={"bold"}
                >
                    {"傻逼网"}
                </Link>
                {" All Right Reserved."}
            </Typography>
            <Typography variant={"body2"} component={"p"}>
                {"Website built by "}
                <Link
                    href={"https://ahdark.com"}
                    underline={"none"}
                    rel={"author noopener"}
                    target={"_blank"}
                >
                    {"AHdark"}
                </Link>
                {"."}
            </Typography>
        </Box>
    );
}
