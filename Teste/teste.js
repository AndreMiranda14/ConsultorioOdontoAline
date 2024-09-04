document.addEventListener('DOMContentLoaded', function() {
    // Dados do CID
    const cidData = [
        { value: "Selecione o CID", text: "" },
        { value: "K00", text: "Distúrbios do desenvolvimento e da erupção dos dentes" },
        { value: "K000", text: "Anodontia" },
        { value: "K001", text: "Dentes supranumerários" },
        { value: "K002", text: "Anomalias do tamanho e da forma dos dentes" },
        { value: "K003", text: "Dentes manchados" },
        { value: "K004", text: "Distúrbios na formação dos dentes" },
        { value: "K005", text: "Anomalias hereditárias da estrutura dentária não classificadas em outra parte" },
        { value: "K006", text: "Distúrbios da erupção dentária" },
        { value: "K007", text: "Síndrome da erupção dentária" },
        { value: "K008", text: "Outros distúrbios do desenvolvimento dos dentes" },
        { value: "K009", text: "Distúrbio não especificado do desenvolvimento dentário" },
        { value: "K01", text: "Dentes inclusos e impactados" },
        { value: "K010", text: "Dentes inclusos" },
        { value: "K011", text: "Dentes impactados" },
        { value: "K02", text: "Cárie dentária" },
        { value: "K020", text: "Cáries limitadas ao esmalte" },
        { value: "K021", text: "Cáries da dentina" },
        { value: "K022", text: "Cárie do cemento" },
        { value: "K023", text: "Cáries dentárias estendidas" },
        { value: "K024", text: "Odontoclasia" },
        { value: "K028", text: "Outras cáries dentárias" },
        { value: "K029", text: "Cárie dentária, sem outra especificação" },
        { value: "K03", text: "Outras doenças dos tecidos dentários duros" },
        { value: "K030", text: "Atrito dentário excessivo" },
        { value: "K031", text: "Abrasão dentária" },
        { value: "K032", text: "Erosão dentária" },
        { value: "K033", text: "Reabsorção patológica dos dentes" },
        { value: "K034", text: "Hipercementoose" },
        { value: "K035", text: "Ancilose dentária" },
        { value: "K036", text: "Depósitos nos dentes" },
        { value: "K037", text: "Alterações pós-eruptivas da cor dos tecidos duros dos dentes" },
        { value: "K038", text: "Outras doenças especificadas dos tecidos duros dos dentes" },
        { value: "K039", text: "Doença dos tecidos duros dos dentes, não especificada" },
        { value: "K04", text: "Doenças da polpa e dos tecidos periapicais" },
        { value: "K040", text: "Pulpite" },
        { value: "K041", text: "Necrose da polpa" },
        { value: "K042", text: "Degeneração da polpa" },
        { value: "K043", text: "Formação anormal de tecidos duros na polpa" },
        { value: "K044", text: "Periodontite apical aguda de origem pulpar" },
        { value: "K045", text: "Periodontite apical crônica" },
        { value: "K046", text: "Abscesso periapical com fístula" },
        { value: "K047", text: "Abscesso periapical sem fístula" },
        { value: "K048", text: "Cisto radicular" },
        { value: "K049", text: "Outras doenças da polpa e dos tecidos periapicais e as não especificadas" },
        { value: "K05", text: "Gengivite e doenças periodontais" },
        { value: "K050", text: "Gengivite aguda" },
        { value: "K051", text: "Gengivite crônica" },
        { value: "K052", text: "Periodontite aguda" },
        { value: "K053", text: "Periodontite crônica" },
        { value: "K054", text: "Periodontose" },
        { value: "K055", text: "Outras doenças periodontais" },
        { value: "K056", text: "Doença periodontal, sem outra especificação" },
        { value: "K06", text: "Outros transtornos da gengiva e do rebordo alveolar sem dentes" },
        { value: "K060", text: "Retração gengival" },
        { value: "K061", text: "Hiperplasia gengival" },
        { value: "K062", text: "Lesões da gengiva e do rebordo alveolar sem dentes, associadas a traumatismo" },
        { value: "K068", text: "Outros transtornos especificados da gengiva e do rebordo alveolar sem dentes" },
        { value: "K069", text: "Transtorno da gengiva e do rebordo alveolar sem dentes, sem outra especificação" },
        { value: "K07", text: "Anomalias dentofaciais (inclusive a maloclusão)" },
        { value: "K070", text: "Anomalias importantes (major) do tamanho da mandíbula" },
        { value: "K071", text: "Anomalias da relação entre a mandíbula com a base do crânio" },
        { value: "K072", text: "Anomalias da relação entre as arcadas dentárias" },
        { value: "K073", text: "Anomalias da posição dos dentes" },
        { value: "K074", text: "Maloclusão, não especificada" },
        { value: "K075", text: "Anormalidades dentofaciais funcionais" },
        { value: "K076", text: "Transtornos da articulação temporomandibular" },
        { value: "K078", text: "Outras anomalias dentofaciais" },
        { value: "K079", text: "Anomalia dentofacial, sem outra especificação" },
        { value: "K08", text: "Outros transtornos dos dentes e de suas estruturas de sustentação" },
        { value: "K080", text: "Exfoliação dos dentes devido a causas sistêmicas" },
        { value: "K081", text: "Perda de dentes devido a acidente, extração ou a doenças periodontais localizadas" },
        { value: "K082", text: "Atrofia do rebordo alveolar sem dentes" },
        { value: "K083", text: "Raiz dentária retida" },
        { value: "K088", text: "Outros transtornos especificados dos dentes e das estruturas de sustentação" },
        { value: "K089", text: "Transtorno dos dentes e de suas estruturas de sustentação, sem outra especificação" },
        { value: "K09", text: "Cistos da região bucal não classificados em outra parte" },
        { value: "K090", text: "Cistos odontogênicos de desenvolvimento" },
        { value: "K091", text: "Cistos de desenvolvimento (não-odontogênicos) da região bucal" },
        { value: "K092", text: "Outros cistos das mandíbulas" },
        { value: "K098", text: "Outros cistos da região oral não classificados em outra parte" },
        { value: "K099", text: "Cistos da região oral, sem outra especificação" },
        { value: "K10", text: "Outras doenças dos maxilares" },
        { value: "K100", text: "Transtornos do desenvolvimento dos maxilares" },
        { value: "K101", text: "Granuloma central de células gigantes" },
        { value: "K102", text: "Afecções inflamatórias dos maxilares" },
        { value: "K103", text: "Alveolite maxilar" },
        { value: "K108", text: "Outras doenças especificadas dos maxilares" },
        { value: "K109", text: "Doença dos maxilares, sem outra especificação" },
        { value: "K11", text: "Doenças das glândulas salivares" },
        { value: "K110", text: "Atrofia de glândula salivar" },
        { value: "K111", text: "Hipertrofia de glândula salivar" },
        { value: "K112", text: "Sialadenite" },
        { value: "K113", text: "Abscesso de glândula salivar" },
        { value: "K114", text: "Fístula de glândula salivar" },
        { value: "K115", text: "Sialolitíase" },
        { value: "K116", text: "Mucocele de glândula salivar" },
        { value: "K117", text: "Alterações da secreção salivar" },
        { value: "K118", text: "Outras doenças das glândulas salivares" },
        { value: "K119", text: "Doença de glândula salivar, sem outra especificação" },
        { value: "K12", text: "Estomatite e lesões correlatas" },
        { value: "K120", text: "Aftas bucais recidivantes" },
        { value: "K121", text: "Outras formas de estomatite" },
        { value: "K122", text: "Celulite e abscesso da boca" },
        { value: "K13", text: "Outras doenças do lábio e da mucosa oral" },
        { value: "K130", text: "Doenças dos lábios" },
        { value: "K131", text: "Mordedura da mucosa das bochechas e dos lábios" },
        { value: "K132", text: "Leucoplasia e outras afecções do epitélio oral, inclusive da língua" },
        { value: "K133", text: "Leucoplasia pilosa" },
        { value: "K134", text: "Lesões granulomatosas e granulomatóides da mucosa oral" },
        { value: "K135", text: "Fibrose oral submucosa" },
        { value: "K136", text: "Hiperplasia irritativa da mucosa oral" },
        { value: "K137", text: "Outras lesões e as não especificadas da mucosa oral" },
        { value: "K14", text: "Doenças da língua" },
        { value: "K140", text: "Glossite" },
        { value: "K141", text: "Língua geográfica" },
        { value: "K142", text: "Glossite rombóide mediana" },
        { value: "K143", text: "Hipertrofia das papilas linguais" },
        { value: "K144", text: "Atrofia das papilas linguais" },
        { value: "K145", text: "Língua escrota" },
        { value: "K146", text: "Glossodínia" },
        { value: "K148", text: "Outras doenças da língua" },
        { value: "K149", text: "Doença da língua, sem outra especificação" }
    ];

    const cidSelect = document.getElementById('CID');
    const cidFilter = document.getElementById('CID-filter');

    // Função para preencher o select com as opções de CID
    function populateCIDSelect(data) {
        cidSelect.innerHTML = ''; // Limpa opções anteriores
        data.forEach(cid => {
            const option = document.createElement('option');
            option.value = cid.value;
            option.textContent = `${cid.value} - ${cid.text}`;
            cidSelect.appendChild(option);
        });
    }

    // Preenche o select inicialmente
    populateCIDSelect(cidData);

    // Função para filtrar as opções do select
    function filterCIDOptions() {
        const filterValue = cidFilter.value.toLowerCase();
        const filteredData = cidData.filter(cid =>
            cid.text.toLowerCase().includes(filterValue) || cid.value.toLowerCase().includes(filterValue)
        );
        populateCIDSelect(filteredData);
    }

    // Adiciona o evento de input para o filtro
    cidFilter.addEventListener('input', filterCIDOptions);

    // Define a data atual no campo de data
    definirDataAtual();
});

// Função para definir a data atual no campo de data
function definirDataAtual() {
    const campoData = document.getElementById('data');
    const hoje = new Date().toISOString().split('T')[0];
    campoData.value = hoje;
}
