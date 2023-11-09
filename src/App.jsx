import React, { useRef } from "react";
import MultiPagePdfGenerator from "./components/ExportForm";

const App = () => {
  const testRef = useRef();
  const handleDownload = MultiPagePdfGenerator([testRef]);
  return (
    <div style={{ padding: "20px" }}>
      <span
        onClick={handleDownload}
        style={{
          backgroundColor: "lightblue",
          padding: "12px",
          cursor: "pointer",
        }}
      >
        Download
      </span>
      <div ref={testRef} style={{ marginTop: "12px" }}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolor
          repellat atque! Assumenda sit excepturi modi at officia iure neque
          pariatur eaque voluptatum. Aut ab tempora quos earum inventore
          voluptas rerum optio facere odio reiciendis corporis, vitae dolor
          fugiat ea nemo molestias asperiores voluptates, accusantium iste illum
          minus, quaerat corrupti. Sunt minus deserunt suscipit et voluptas
          odit, perferendis esse odio sapiente corrupti obcaecati quos, impedit
          vel asperiores architecto doloribus aliquid maiores tenetur quam
          laudantium rerum velit dolorum quidem. Voluptates et dolor illo.
          Asperiores vero temporibus dolore voluptatem necessitatibus, omnis
          iste, culpa beatae laudantium sint suscipit odio quo unde tenetur
          corporis, quidem quisquam eum saepe. Provident unde fugiat accusamus
          ipsam a quidem totam veritatis. Vitae, iure natus laudantium at nihil
          aut quisquam nisi earum reiciendis sint obcaecati eius eaque nulla?
          Tempore voluptas fugit quibusdam earum repellat laborum laudantium
          tempora ipsam veritatis officiis blanditiis quos dolor nam, dicta
          sapiente minus nobis excepturi eveniet explicabo ratione dolore quod
          repellendus nostrum? Odit beatae nihil nobis, officia odio id
          excepturi molestias, reiciendis, fugit corporis dolorum accusantium
          eos tempora incidunt? Sed officia reprehenderit error saepe labore
          dolorum veritatis expedita, ratione, ut, laborum voluptas. Excepturi
          itaque mollitia beatae voluptate nobis, dolorem consequuntur dicta
          saepe quasi repellat repellendus, sed cum molestiae! Ratione molestiae
          minus odio. Aperiam ipsam quod numquam sit temporibus tempore non sunt
          tempora qui maxime, id quas dicta quos unde fugiat similique deleniti
          est suscipit, labore aliquid libero sequi harum quidem. Dolor,
          voluptas. Perferendis tenetur impedit molestiae omnis vel perspiciatis
          commodi vero ab fugit officiis. Dolore repudiandae labore, accusamus
          iusto fuga ducimus obcaecati vitae non sit ipsum cum provident est
          voluptas optio similique, assumenda quaerat unde! Suscipit, maxime
          itaque ex tempore aut saepe, recusandae soluta accusamus numquam
          dolorum dolorem explicabo possimus eveniet doloribus quidem dolor
          veniam animi quia. Nesciunt quo quas repellat recusandae quis
          obcaecati, veniam dignissimos. Ex, culpa, voluptates libero odit
          pariatur incidunt, qui et exercitationem recusandae asperiores
          inventore dicta aliquid explicabo excepturi at obcaecati illum est
          quaerat quia repudiandae ducimus repellat quasi delectus minus. Odio a
          molestiae dolorum numquam exercitationem explicabo nesciunt, accusamus
          odit, quidem quas ab possimus quia amet dolor maxime nulla. Aliquam
          voluptate eum mollitia repellat veritatis quo accusantium? Ducimus
          rerum reprehenderit quia saepe iste necessitatibus, quas laborum
          reiciendis dignissimos labore ut animi possimus voluptatum cumque
          totam rem atque maiores officiis et! Exercitationem, hic blanditiis
          alias illo recusandae voluptate quod cumque vero quidem velit dolores
          deleniti consequatur eaque iure repellat dolorum omnis cum! Nulla
          cupiditate ad, rem officiis voluptatum aperiam dicta vel quis placeat
          quaerat eveniet suscipit, natus asperiores. Modi vero id, culpa quo,
          animi necessitatibus fugit perferendis, optio sit quisquam voluptates
          placeat. Vero odio minima saepe voluptatum dignissimos, dolorem cum
          eaque ipsam ex officiis tenetur sapiente at cupiditate blanditiis
          quaerat reiciendis ullam vitae. Nulla autem saepe incidunt totam magni
          quibusdam eligendi ducimus natus. Cumque nisi modi culpa maiores
          adipisci aperiam, voluptatem repudiandae odit ipsam aliquid placeat,
          ad doloremque iure odio sequi facere officia iste asperiores fugit
          natus vitae, corrupti recusandae perferendis? Harum, quia amet esse
          distinctio corporis neque hic facilis, tempora dolorum, quaerat
          voluptate et? Quod iusto molestiae est inventore minima, suscipit quia
          dolor alias ea optio omnis nam et aliquid accusantium aspernatur modi
          ipsa itaque exercitationem, harum nisi error recusandae ab quisquam!
          Voluptates perferendis explicabo perspiciatis ipsa cupiditate
          reprehenderit sed beatae quas, error ex inventore quod et porro quia
          excepturi eius, nobis mollitia rerum minima corrupti ipsam ad dolore?
          Distinctio at quasi optio similique ullam dolores sequi rerum. Ut
          pariatur hic repellat accusantium aspernatur fugiat unde quia
          excepturi, cumque numquam. Similique recusandae amet id soluta sint
          dignissimos placeat magnam quia non fuga vitae eius vel quas esse
          possimus ratione, sunt dolor repellat at praesentium officiis,
          voluptatem laudantium. Tempore, exercitationem nostrum blanditiis id
          vero architecto omnis nulla fugit neque delectus itaque et voluptatum
          sit dolores dolore totam inventore, consequuntur enim quasi impedit.
          Incidunt natus tempore quas quidem, assumenda suscipit accusantium
          tempora veniam magni consectetur ducimus laudantium exercitationem
          temporibus cum distinctio. Delectus, repudiandae. Debitis quos quia
          expedita exercitationem rerum facilis tempore excepturi quod
          distinctio nemo fugit aliquam dicta animi quisquam, voluptate officia
          esse quibusdam reiciendis eveniet. Eum nemo voluptas adipisci
          reprehenderit, exercitationem debitis rerum dolorem amet perspiciatis
          quis sit porro quaerat molestiae beatae explicabo repudiandae est
          reiciendis neque. Libero voluptate, quae facilis quis corporis minus
          officiis sed iure ab explicabo accusantium porro odio quibusdam
          excepturi repellat. Delectus eaque cumque aut provident tempora libero
          consequuntur, nihil ducimus a obcaecati! Debitis dolorem maiores sequi
          ab, facilis aut at ut tempora ipsum doloribus totam itaque temporibus
          fugiat ratione neque voluptates amet suscipit assumenda consectetur.
          Optio adipisci quod unde velit veniam praesentium, excepturi, quo
          voluptatum architecto dolore repellendus doloribus id! Fugit, unde
          incidunt, qui repudiandae impedit sapiente culpa facilis neque aliquid
          architecto, et enim! Quisquam molestiae ad optio perferendis sunt
          magni deleniti vel dolor molestias, tempora, commodi, ullam distinctio
          assumenda consequuntur! Consequatur ducimus ut quisquam! Sequi odit
          velit dolores cum mollitia, asperiores ipsum itaque voluptas maxime,
          perspiciatis dolorum aliquid rerum animi, accusantium cupiditate
          obcaecati modi. Asperiores delectus natus officia quisquam,
          perferendis dicta. Numquam quasi iure consectetur odit voluptatum
          dignissimos repudiandae, quod asperiores natus officiis maiores cum
          accusamus et, commodi quidem tempora ipsam perspiciatis quis!
          Consequuntur provident sapiente velit rem odio placeat id minus
          officiis maiores accusantium praesentium facilis quas, quisquam
          corrupti exercitationem aperiam eum aliquid minima quos. Inventore
          aut, ipsum ipsam magnam nobis similique suscipit laboriosam veniam ad
          obcaecati, doloremque accusamus assumenda! Nemo obcaecati voluptates
          nostrum libero quos, molestias culpa magni perferendis placeat tenetur
          commodi mollitia deleniti praesentium debitis. Numquam, corrupti. Non
          excepturi accusamus, doloremque neque magnam ducimus fugiat aliquam!
          Qui repudiandae dolorem reprehenderit rerum saepe nemo veniam ullam
          omnis expedita, ipsam explicabo quis voluptatibus quidem accusamus
          magnam aperiam sapiente! Quae est explicabo at nostrum maiores beatae
          distinctio iste non rem! Animi quaerat officiis unde exercitationem
          quos. Modi voluptates eligendi, reiciendis sint eius possimus delectus
          illum? Beatae est quasi facilis, ad maiores, ex, perferendis sequi
          quam cum veniam commodi! Culpa esse quia omnis consectetur inventore
          aliquam? Eaque ducimus est ab. Est consequatur, qui, labore eligendi
          natus harum accusantium, rerum facere optio saepe ipsam temporibus
          atque! Et!
        </p>
      </div>
    </div>
  );
};

export default App;
