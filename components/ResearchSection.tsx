
import React from 'react';
import Section from './Section';
import { BookOpenIcon } from '../constants'; // Explicit import

const ResearchSection: React.FC = () => {
  const keywords = ["NLP", "BERT", "Machine Learning", "Recommender Systems", "Higher Education", "Syllabus Analysis"];

  return (
    <Section id="research" className="bg-brand-green-light" title="研究内容">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <BookOpenIcon className="w-10 h-10 mr-4 text-brand-green" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
            学習者プロファイルと授業概要を対象とした距離学習に基づく科目推薦
            </h3>
            <p className="text-gray-600">Computer Science Department, [Your University Name]</p>
          </div>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-6">
        本研究は、大学新入生や企業研修受講者が自らの学習目標や興味に基づき最適な講座を選択できるよう支援することを目的とする。従来は閲覧履歴やキーワードでユーザープロファイルを構築していたが、本研究では学習者が自由に記述した経験や目標と、大学シラバスの授業概要をベクトル化し、SBERTのFine-tuningによってコサイン類似度を算出する手法を提案する。実験は、科目名と授業説明を組み合わせた大学シラバスのデータセットを用いて行う。その結果、BERTよりSBERTが高精度で推薦できることやFine-tuningの有用性が示された。今後は、ユーザープロファイルの長さの違いや、過去の学習経験と今後の学習希望内容の切り分けに関する検証が課題である。本手法は大学教育のみならずオンライン学習や企業研修にも応用可能で、柔軟かつ効率的な学習環境の構築に寄与すると考えられる。
        </p>
        {/* <p className="text-gray-700 leading-relaxed mb-6">
          This project involved data collection of syllabi, preprocessing textual data, fine-tuning BERT models for semantic understanding, and developing an algorithm to match student profiles and academic goals with suitable courses. The findings demonstrated a significant improvement in recommendation relevance compared to traditional methods.
        </p> */}
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Keywords:</h4>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="bg-green-100 text-brand-green text-sm font-medium px-3 py-1.5 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
        {/* Optional: Add a link to a paper or presentation */}
        {/* 
        <div className="mt-6">
          <a href="#" className="text-brand-green hover:text-brand-green-dark font-semibold">
            View Publication (if available) &rarr;
          </a>
        </div>
        */}
      </div>
    </Section>
  );
};

export default ResearchSection;
