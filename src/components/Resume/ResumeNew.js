import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const determineScale = () => {
		if (width > 1200) {
			return 2.0;
		} else if (width > 992) {
			return 1.5;
		} else if (width > 786) {
			return 1.0;
		} else {
			return 0.6;
		}
	};
	return (
		<div>
			<Container fluid className="resume-section">
				<Particle />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={pdf}
						target="_blank"
						style={{
							maxWidth: "250px",
							borderRadius: 10,
							padding: ".5rem 1rem",
						}}
					>
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>

				<Row className="resume">
					<Document file={pdf} className="d-flex justify-content-center">
						<Page pageNumber={1} scale={determineScale()} />
					</Document>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={pdf}
						target="_blank"
						style={{
							maxWidth: "250px",
							borderRadius: 10,
							padding: ".5rem 1rem",
						}}
					>
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default ResumeNew;
