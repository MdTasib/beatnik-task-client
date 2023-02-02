import React from "react";
import AdsGrid from "../../components/Ads/AdsGrid";
import SectionBooks from "../../components/SectionBooks/SectionBooks";
import ImageSlider from "../../components/Slider/Slider";
import Education from "./education/Education";
import PopularAuthor from "./popularAuthor/PopularAuthor";

function Home() {
	return (
		<div>
			<ImageSlider />
			<Education />
			<SectionBooks 
				filters={{ category: "বইমেলা" }}
				title='ইসলামী সাহিত্য, গল্প-উপন্যাস এবং সফরনামা'
			/>
			<SectionBooks
				filters={{ category: "ইবাদত" }}
				title='ঈমান আক্বিদা ও বিশ্বাস'
			/>
			<AdsGrid />
			<SectionBooks
				filters={{ category: "ঈমান" }}
				title='শিশু-কিশোরদের ইসলামী বই
'
			/>
			<PopularAuthor />
		</div>
	);
}

export default Home;
