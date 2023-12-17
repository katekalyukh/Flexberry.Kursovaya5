package Kursovaya5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: ПечатьФото
 */
@Entity(name = "IISKursovaya5ПечатьФото")
@Table(schema = "public", name = "ПечатьФото")
public class PechatFoto {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЗаказа")
    private Integer номерзаказа;

    @Column(name = "Носитель")
    private String носитель;

    @Column(name = "РазмерВСм")
    private String размервсм;

    @Column(name = "Количество")
    private Integer количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Fotokiosk")
    @Convert("Fotokiosk")
    @Column(name = "Фотокиоск", length = 16, unique = true, nullable = false)
    private UUID _fotokioskid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Fotokiosk", insertable = false, updatable = false)
    private Fotokiosk fotokiosk;

    @OneToMany(mappedBy = "pechatfoto", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Korrekciya> korrekciyas;


    public PechatFoto() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЗаказа() {
      return номерзаказа;
    }

    public void setНомерЗаказа(Integer номерзаказа) {
      this.номерзаказа = номерзаказа;
    }

    public String getНоситель() {
      return носитель;
    }

    public void setНоситель(String носитель) {
      this.носитель = носитель;
    }

    public String getРазмерВСм() {
      return размервсм;
    }

    public void setРазмерВСм(String размервсм) {
      this.размервсм = размервсм;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }


}